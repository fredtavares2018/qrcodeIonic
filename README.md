# qrcodeIonic
Qrcode Ionic e cadastro em banco - SQL - xampp

https://ionicframework.com/docs/v3/native/barcode-scanner/

$ ionic cordova plugin add phonegap-plugin-barcodescanner
$ npm install --save @ionic-native/barcode-scanner@4

Para ionic 4


criei uma pasta no xampp e criei o arquivo cadastro.php

----------------------------------------------------------------------------------------------
<?php

include 'conecta.php';

header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");
		header('Access-Control-Max-Age: 86400');
		header("Access-Control-Expose-Headers: Content-Length, X-JSON");
		header("Access-Control-Allow-Headers: *");

    $postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$nome = $request->nome;
$email = $request->email;
$telefone = $request->telefone;
$qrcode = $request->qrcode;


      $recebendo_cadastro = "INSERT INTO alunos
        VALUES(NULL, '$nome','$email', '$telefone', '$qrcode')";
      $query_cadastro = mysqli_query($conn, $recebendo_cadastro) or die(mysqli_error($conn));

      if($query_cadastro){
        echo json_encode(array('message'=> 1 ));
    }else{
      
        echo json_encode(array('message'=> 2));
    }

---------------------------------------------------------------------------------------------------

Esse é um exemplo localhost...