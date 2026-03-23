<?php
/**
 * Script de Depuração Resend API (Versão Simplificada)
 */
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: text/html; charset=UTF-8');

$resend_api_key = 're_JUMgb4c7_CSc72PgTsd5hQ8TFGVd579z6';

echo "<h1>Depuração Resend API (v2)</h1>";

$payload = [
    'from' => 'Risco Brasil <contato@riscobrasil.com>',
    'to' => ['alpha.clientesleads@gmail.com'],
    'subject' => 'Teste de Depuração Resend',
    'html' => '<b>Teste de conexão via CURL na HostGator (v2)</b>',
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
$error = curl_error($ch);
curl_close($ch);

echo "<h3>Resultado do Envio:</h3>";
if ($error) {
    echo "<b style='color:red'>ERRO DE CONEXÃO:</b> $error <br>";
} else {
    echo "<b style='color:green'>HTTP CODE:</b> $http_code <br>";
    echo "<b>Resposta da API:</b> <pre>" . htmlspecialchars($response) . "</pre>";
}

echo "<hr>";
echo "<h3>Instruções:</h3>";
echo "1. Se o HTTP CODE for 200/201, o e-mail FOI ENVIADO pelo Resend. Verifique o SPAM.<br>";
echo "2. Se o HTTP CODE for 403/401, a API Key está inválida.<br>";
echo "3. Se houver ERRO DE CONEXÃO, a HostGator bloqueia chamadas externas.";
?>
