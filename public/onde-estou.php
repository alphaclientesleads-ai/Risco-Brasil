<?php
echo "<h1>Diagnóstico de Caminho Risco Brasil</h1>";
echo "<b>Diretório Atual:</b> " . __DIR__ . "<br>";
echo "<b>Caminho Completo:</b> " . $_SERVER['SCRIPT_FILENAME'] . "<br>";
echo "<b>Document Root:</b> " . $_SERVER['DOCUMENT_ROOT'] . "<br>";
echo "<hr>";
echo "Se você está vendo esta página, o PHP está funcionando e este diretório está acessível via navegador.";
?>