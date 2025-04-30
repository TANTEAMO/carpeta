<?php
header('Content-Type: application/json');
$response = file_get_contents('https://api.apis.net.pe/v2/sunat/tipo-cambio');
echo $response;
?>
