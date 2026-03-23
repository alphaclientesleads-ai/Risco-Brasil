<?php
/**
 * Script para envio de formulário via Resend API
 * Risco Brasil - Solução definitiva para entrega de e-mails
 */

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $resend_api_key = 're_JUMgb4c7_CSc72PgTsd5hQ8TFGVd579z6';
    
    // Coletar dados
    $nome = strip_tags(trim($_POST["nome"] ?? "Lead"));
    $email_cliente = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $whatsapp = strip_tags(trim($_POST["whatsapp"] ?? "Não informado"));
    $empresa = strip_tags(trim($_POST["empresa"] ?? "Não informado"));
    $cargo = strip_tags(trim($_POST["cargo"] ?? "Não informado"));
    $tipo = strip_tags(trim($_POST["tipo"] ?? "Não informado"));
    $valor = strip_tags(trim($_POST["valor"] ?? "Não informado"));
    $obs = strip_tags(trim($_POST["obs"] ?? "Sem observações"));

    // Montar corpo do e-mail (HTML para melhor apresentação)
    $html_content = "
    <h2>Novo Lead Recebido - Risco Brasil</h2>
    <p><strong>Nome:</strong> {$nome}</p>
    <p><strong>Empresa:</strong> {$empresa} ({$cargo})</p>
    <p><strong>WhatsApp:</strong> {$whatsapp}</p>
    <p><strong>Tipo de Obra:</strong> {$tipo}</p>
    <p><strong>Valor Aprox:</strong> {$valor}</p>
    <hr>
    <p><strong>Observações:</strong><br>{$obs}</p>
    <br>
    <p><small>Enviado em: " . date("d/m/Y H:i:s") . "</small></p>
    ";

    $payload = [
        'from' => 'Risco Brasil <contato@riscobrasil.com>',
        // IMPORTANTE: No modo de teste do Resend, você só pode enviar para o e-mail que criou a conta.
        // Assim que você verificar o domínio riscobrasil.com no painel do Resend, poderá adicionar os outros e-mails.
        'to' => ['alpha.clientesleads@gmail.com', 'cristiano@riscobrasil.com', 'contato@riscobrasil.com'], 
        'subject' => 'Novo Lead "Risco Brasil" Página Alpha',
        'html' => $html_content,
        'reply_to' => !empty($email_cliente) ? $email_cliente : 'contato@riscobrasil.com'
    ];

    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $resend_api_key,
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($http_code >= 200 && $http_code < 300) {
        echo json_encode(["status" => "success", "message" => "Lead enviado com sucesso via Resend."]);
    } else {
        error_log("Erro Resend (Code $http_code): " . $response);
        echo json_encode(["status" => "error", "message" => "Ocorreu um erro ao enviar via API.", "debug" => $http_code]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Acesso negado."]);
}
?>
