<?php

    echo "Hello";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if (!empty($_POST["email"]) && !empty($_POST["password"])) {
            
        } else {
            if (empty($_POST["email"])) {
                echo "<script>
                alert('Please enter in your password');
                </script>";
            }
            else {
                echo "<script>
                    alert('Please enter in your password');
                </script>";
            }
        }
    
    }

?>

<!-- signInFunctionCheck(false, 'Please enter in your Email.'); -->