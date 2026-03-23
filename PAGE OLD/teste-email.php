<?php
/**
 * Script de Diagnóstico de E-mail
 */
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: text/html; charset=UTF-8');

$to = "alpha.clientesleads@gmail.com, contato@riscobrasil.com";
$subject = "Teste de Diagnóstico Risco Brasil";
$message = "Este é um teste do sistema de e-mail da Risco Brasil.\nData: " . date("d/m/Y H:i:s");
$from = "contato@riscobrasil.com";

$headers = "From: $from\r\n";
$headers .= "Reply-To: $from\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

echo "<h1>Diagnóstico de E-mail</h1>";
echo "Enviando para: $to <br>";
echo "De: $from <br><hr>";

if (mail($to, $subject, $message, $headers, "-f $from")) {
    echo "<b style='color:green'>SUCESSO:</b> O servidor enviou o e-mail para o sistema de filas. <br>";
    echo "Isso significa que a `mail()` retornou true. Se não chegar, o problema é bloqueio de SPAM ou caixa de saída do servidor.";
} else {
    echo "<b style='color:red'>ERRO:</b> O servidor recusou o envio (mail() retornou false). <br>";
    echo "Verifique se a conta <b>$from</b> realmente existe no cPanel da HostGator.";
}

echo "<br><hr><h3>Outras informações:</h3>";
echo "PHP Version: " . phpversion() . "<br>";
echo "Server Info: " . $_SERVER['SERVER_SOFTWARE'] . "<br>";
?>
