<?php

    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])){
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        }
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])){
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        }
    
        exit(0);
    }
    
    if (isset($_POST['email']) && $_POST['password']) {
        $email = $_POST['email'];
        $client_password = $_POST['password'];
        check_user_login($email, $client_password);
    }

    function check_user_login($email, $client_password){
        $isUser = false;

        $host = 'localhost';
        $username = 'root';
        $password = 'password';
        $dbname = 'pressure_pals';
    
        $conn = mysqli_connect(hostname: $host, username: $username, password: $password, database: $dbname);
    
        if (mysqli_connect_errno()){
            die("Connection error: " . mysqli_connect_errno());
        } 

        $sql = "SELECT * FROM pressure_pal_client";
    
        $result = mysqli_query($conn, $sql);
    
        while ($row = mysqli_fetch_array($result)){
            if ($email == $row['email'] && $client_password == $row['client_password']){
                $isUser = true;
                echo json_encode($row['access_level']);
    
                return;
            }
        }
    
        if(!$isUser){
            echo json_encode("no user");
        }
    
        mysqli_close($conn);

        return;
    }

?>