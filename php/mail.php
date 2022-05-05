<?php
    $to = "niels.vder.vlist@gmail.com";
    $subject = "Portfolio";

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $message .= $name;

    $header = "From:".$email."\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";

    $retVal = mail ($to,$subject,$message,$header);

    if( $retVal == true ) {
        echo "Message sent successfully...";
    }else {
        echo "Message could not be sent...";
    }
