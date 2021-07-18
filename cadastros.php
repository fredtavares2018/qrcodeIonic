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


