<?php

include 'conecta.php';

header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");
		header('Access-Control-Max-Age: 86400');
		header("Access-Control-Expose-Headers: Content-Length, X-JSON");
		header("Access-Control-Allow-Headers: *");


      $recebendo_cadastro = "SELECT * FROM alunos ORDER BY id desc ";
      $query_cadastro = mysqli_query($conn, $recebendo_cadastro) or die(mysqli_error($conn));

      while($linha = mysqli_fetch_array($query_cadastro)){

        $json_array[] = [
            'nome' => $linha['nome'],
            'email' => $linha['email'],
            'qrcode' => $linha['qrcode'],
            
        ];
    
    }
    
    echo json_encode($json_array);


