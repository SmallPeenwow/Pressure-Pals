<?php

// header("Content-Type: text/event-stream");
header("Cache-Control: no-cache");
header("Access-Control-Allow-Origin: *");

    // $error = "";

    // if(!empty($_POST['email'])){
    //     $data['status'] = 'ok';
    // }

    // if (isset($_POST['login'])) {
        check_user_login();
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // if (!empty($_POST["email"]) && !empty($_POST["password"])) {
        //     check_user_login();
        // } else {
        //     header('Location:../../pages/signIn.html?status=error');
        // }
        // header("Content-Type: application/json");
        // header("Access-Control-Allow-Methods: GET, POST");
    }

    function check_user_login(){
    
        // $isUser = false;
    
        // $email = $_POST["email"];
        // $client_password = $_POST["password"];
    
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
    
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){

            header("Content-Type: application/json");
            header("Access-Control-Allow-Methods: GET, POST");
            
            echo json_encode(['status' => 1, 'data' => $result]);
            // header('Location:../../pages/signIn.html?status=1');
            // if ($email == $row['email'] && $client_password == $row['client_password']){
            //     $isUser = true;

            //     header('Location:../../pages/signIn.html?status=success');
    
            //     return;
            // }
        }
    
        // if(!$isUser){
        //     header('Location:../../pages/signIn.html?status=fail');
        // }
    
        mysqli_close($conn);

        return;
    }

?>