<?php
// Script de teste de e-mail - DELETE após confirmar funcionamento
$to = "contato@riscobrasil.com, alpha.clientesleads@gmail.com";
$from = "contato@riscobrasil.com";
$subject = "TESTE RISCO BRASIL - " . date("d/m/Y H:i:s");
$body = "Este é um e-mail de teste enviado em: " . date("d/m/Y H:i:s");

$headers = "From: Risco Brasil <$from>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$result = mail($to, $subject, $body, $headers, "-f $from");

echo "<h2>Teste de E-mail</h2>";
if ($result) {
    echo "<p style='color:green;font-size:20px;'>✅ SUCESSO! E-mail aceito pelo servidor.<br>Verifique a caixa de entrada e o SPAM de contato@riscobrasil.com e alpha.clientesleads@gmail.com</p>";
} else {
    echo "<p style='color:red;font-size:20px;'>❌ FALHA! O servidor rejeitou o e-mail.</p>";
    $error = error_get_last();
    echo "<pre>" . print_r($error, true) . "</pre>";
}
echo "<p>PHP Version: " . phpversion() . "</p>";
echo "<p>Server: " . $_SERVER['SERVER_SOFTWARE'] . "</p>";
?>