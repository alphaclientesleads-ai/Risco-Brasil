<?php
/**
 * Script para envio de formulário de contato
 * Destinatários: contato@riscobrasil.com e alpha.clientesleads@gmail.com
 */

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pegar dados do formulário dinamicamente
    $email_content = "Novo lead recebido através da Landing Page:\n\n";

    foreach ($_POST as $key => $value) {
        $field = ucfirst(str_replace(['_', '-'], ' ', $key));
        $val = strip_tags(trim($value));
        if (!empty($val)) {
            $email_content .= "$field: $val\n";
        }
    }

    $nome = strip_tags(trim($_POST["nome"] ?? "Lead"));
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);

    // Destinatários
    $to = "contato@riscobrasil.com, alpha.clientesleads@gmail.com";

    // Assunto
    $subject = "Novo Lead Página de anúncio - $nome";

    $email_content .= "\nData: " . date("d/m/Y H:i:s") . "\n";
    $email_content .= "IP: " . $_SERVER['REMOTE_ADDR'] . "\n";

    // Cabeçalhos (Padrão Locaweb: o From deve ser um e-mail válido do domínio)
    $from = "contato@riscobrasil.com";
    $headers = "From: Lead Risco Brasil <$from>\r\n";
    if (!empty($email)) {
        $headers .= "Reply-To: $email\r\n";
    }
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar e-mail com parâmetro -f (Return-Path) exigido por muitas hospedagens
    if (mail($to, $subject, $email_content, $headers, "-f $from")) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "E-mail enviado."]);
    } else {
        error_log("Erro ao enviar email para $to");
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Erro interno no servidor."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Acesso negado."]);
}
?>