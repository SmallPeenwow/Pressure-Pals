<?php

    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) 
    {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') 
    {
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        {
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        }
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        {
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        }
    
        exit(0);
    }
    
    // For Login
    if (isset($_POST['login-email']) && isset($_POST['login-password'])) 
    {
        $email = $_POST['login-email'];
        $client_password = $_POST['login-password'];

        check_user_login($email, $client_password);
    }

    // For Create Account
    if (
        isset($_POST['name']) && 
        isset($_POST['email']) &&
        isset($_POST['cell-number']) && 
        isset($_POST['password'])
    ){
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $email = $_POST['email'];
        $cellNumber = $_POST['cell-number'];
        $client_password = $_POST['password'];
        $address = $_POST['address'];
        $suburb = $_POST['suburb'];

        add_user($name, $surname, $email, $cellNumber, $client_password, $address, $suburb);
    }

    // For fetching pending requests for Admin
    if (isset($_POST['admin-pending-requests']))
    {
        $host = 'localhost';
        $username = 'root';
        $password = 'password';
        $dbname = 'pressure_pals';
    
        $conn = mysqli_connect(hostname: $host, username: $username, password: $password, database: $dbname);

        if (mysqli_connect_errno())
        {
            die("Connection error: " . mysqli_connect_errno());
        } 

        $final_array_send = [];

        $query = "SELECT * FROM pressure_pals_booking";

        $result = mysqli_query($conn, $query);
    
        while ($row = mysqli_fetch_array($result))
        {
            if ($row['action_level'] == 'pending')
            {
                $fetch_array = [];

                array_push($fetch_array, $row['booking_id']);
                array_push($fetch_array, $row['service_type']);
                array_push($fetch_array, $row['date_time']);
                array_push($fetch_array, $row['booking_address']);
                array_push($fetch_array, $row['suburb']);
                array_push($fetch_array, $row['client_id']);

                $client_id_fetch = $row['client_id'];

                $query_two = "SELECT * FROM pressure_pal_client WHERE client_id = $client_id_fetch";

                $result_two = mysqli_query($conn, $query_two);

                $row2 = mysqli_fetch_array($result_two);

                array_push($fetch_array, $row2['client_name']);
                array_push($fetch_array, $row2['client_surname']);
                array_push($fetch_array, $row2['phone_number']);

                array_push($final_array_send, $fetch_array);
            }
        }

        echo json_encode($final_array_send);

        mysqli_close($conn);

        return;
    }

    // For already Logged In
    if (isset($_POST['onload-login-id']))
    {
        $client_id_onload = $_POST['onload-login-id'];
      
        $host = 'localhost';
        $username = 'root';
        $password = 'password';
        $dbname = 'pressure_pals';
    
        $conn = mysqli_connect(hostname: $host, username: $username, password: $password, database: $dbname);

        if (mysqli_connect_errno())
        {
            die("Connection error: " . mysqli_connect_errno());
        } 

        $sql = "SELECT access_level FROM pressure_pal_client WHERE client_id = $client_id_onload";

        $result = mysqli_query($conn, $sql);

        echo json_encode($row = mysqli_fetch_array($result));

        mysqli_close($conn);

        return;
    }

    // For Delete Account
    if (isset($_POST['delete-account-user-id'])){
        $client_id_delete = $_POST['delete-account-user-id'];

        $host = 'localhost';
        $username = 'root';
        $password = 'password';
        $dbname = 'pressure_pals';
    
        $conn = mysqli_connect(hostname: $host, username: $username, password: $password, database: $dbname);

        if (mysqli_connect_errno())
        {
            die("Connection error: " . mysqli_connect_errno());
        } 

        $sql = "DELETE FROM pressure_pal_client WHERE client_id = $client_id_delete";

       if (mysqli_query($conn, $sql)) {
        echo json_encode("Record deleted");
       } else {
        echo json_encode("Error deleting record");
       }


        mysqli_close($conn);

        return;
    }

    function check_user_login($email, $client_password)
    {
        $isUser = false;

        $host = 'localhost';
        $username = 'root';
        $password = 'password';
        $dbname = 'pressure_pals';
    
        $conn = mysqli_connect(hostname: $host, username: $username, password: $password, database: $dbname);
    
        if (mysqli_connect_errno())
        {
            die("Connection error: " . mysqli_connect_errno());
        } 

        $sql = "SELECT * FROM pressure_pal_client";
    
        $result = mysqli_query($conn, $sql);
    
        while ($row = mysqli_fetch_array($result)){
            if ($email == $row['email'] && $client_password == $row['client_password']){
                $isUser = true;

                $userDetails = array($row['access_level'], $row['client_id'], $row['address'], $row['suburb']);
                echo json_encode($userDetails);
    
                return;
            }
        }
    
        if(!$isUser){
            echo json_encode("no user");
        }
    
        mysqli_close($conn);

        return;
    }

    function add_user($name, $surname, $email, $cellNumber, $client_password, $address, $suburb){
        // Errors also go through to make id which should not be allowed
        $host = 'localhost';
        $username = 'root';
        $password = 'password';
        $dbname = 'pressure_pals';
    
        $conn = mysqli_connect(hostname: $host, username: $username, password: $password, database: $dbname);

        $rowCount = 0;
    
        if (mysqli_connect_errno()){
            die("Connection error: " . mysqli_connect_errno());
        } 

        $sql2 = "SELECT * FROM pressure_pal_client";

       
        if ($result = mysqli_query($conn, $sql2)) {
            $rowCount = mysqli_num_rows($result);
        }

        // If user count is less than 7 it will add user
        if ($rowCount < 7){
            // TODO: test this out still
            mysqli_begin_transaction($conn);
            try {
                // $conn->begin_transaction(MYSQLI_TRANS_START_READ_ONLY);
           
                $sql = "INSERT INTO pressure_pal_client (client_name, client_surname, email, phone_number, client_password, address, suburb) VALUES (?, ?, ?, ?, ?, ?, ?)";
        
                $stmt = mysqli_stmt_init($conn);
        
                if (!mysqli_stmt_prepare($stmt, $sql)){
                    die(mysqli_error($conn));
                }
        
                mysqli_stmt_bind_param($stmt, 'sssssss', $name, $surname, $email, $cellNumber, $client_password, $address, $suburb);
        
                //Will still process duplicate record and next one will still increase
                mysqli_stmt_execute($stmt);
                // if(!mysqli_stmt_execute($stmt)){
                //     echo json_encode('failed');
                // }
                // $conn->commit();
                mysqli_commit($conn);
            } catch (\Throwable $e){
                // $conn->rollback();
                mysqli_rollback($conn);
                echo json_encode('failed');
                return;
            }
    
    
            $sqlSelect = "SELECT * FROM pressure_pal_client";
    
            $result = mysqli_query($conn, $sqlSelect);
    
            while ($row = mysqli_fetch_array($result)){
                if ($email == $row['email'] && $client_password == $row['client_password']){
                    echo json_encode($row['client_id']);
        
                    return;
                }
            }
    
        } else {
            
            echo json_encode('full');
        }
        
        mysqli_close($conn);
        return;
    }

?>