<?php
header("Access-Control-Allow-Origin: *");  // "*" could also be a site such as http://www.example.com
header('Content-Type: application/json');
// header("Content-Type: text/event-stream");
    // header("Cache-Control: no-cache");
    // header("Access-Control-Allow-Origin: *");
    // header("Content-Type: application/json");
    
    // if (isset($_POST['action']) && $_POST['action'] === 'loginCheck'){
        //     // $response = file_get_contents('http://127.0.0.1:5500/client/pages/signIn.html/' . $_GET["email"]);
        //     // echo $response;
        //     check_user_login();
        // }

        
    if(isset($_POST)){
        $data = file_get_contents("php://input");

        $user = json_decode($data);
        
        echo json_encode($user);
    }

    // $error = "";

    // if(!empty($_POST['email'])){
    //     $data['status'] = 'ok';
    // }

    // if (isset($_POST['login'])) {
    
    // if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //     // if (!empty($_POST["email"]) && !empty($_POST["password"])) {
    //     //     check_user_login();
    //     // } else {
    //     //     header('Location:../../pages/signIn.html?status=error');
    //     // }
    //     // header("Content-Type: application/json");
    //     // header("Access-Control-Allow-Methods: GET, POST");
    // }

    // function check_user_login(){
    
    //     // $isUser = false;
    //     //$data = [];
    
    //     $email = $_POST["email"];
    //     $client_password = $_POST["password"];
    
    //     $host = 'localhost';
    //     $username = 'root';
    //     $password = 'password';
    //     $dbname = 'pressure_pals';
    
    //     $conn = mysqli_connect(hostname: $host, username: $username, password: $password, database: $dbname);
    
    //     if (mysqli_connect_errno()){
    //         die("Connection error: " . mysqli_connect_errno());
    //     }
    
    //     $sql = "SELECT * FROM pressure_pal_client";
    
    //     $result = mysqli_query($conn, $sql);
    
    //     while ($row = mysqli_fetch_array($result)){
    //         // header('Location:../../pages/signIn.html?status=1');
    //         if ($email == $row['email'] && $client_password == $row['client_password']){
    //             // $isUser = true;
    //             // header("Access-Control-Allow-Methods: GET, POST");
    //             // $data[] = $row['email'];
    //             // $data[] = $row['client_password'];
                
    //             echo json_encode(['status' => 1, 'data' => $row['email']]);
                

    //             // header('Location:../../pages/signIn.html?status=success');
    
    //             return;
    //         }
    //     }
    
    //     // if(!$isUser){
    //     //     header('Location:../../pages/signIn.html?status=fail');
    //     // }
    
    //     mysqli_close($conn);

    //     return;
    // }

?>