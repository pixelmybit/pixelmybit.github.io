<?php

    if(isset($_POST['submit']))
    {
        
        $usrnm = $_POST['usrnm'];
        $mobile = $_POST['mobile'];
        $email = $_POST['email'];
        $mgr = $_POST['mgr'];
        $siteNr = $_POST['siteNr'];
        $siteURL = $_POST['textBox'];
        
        $email_from = 'kamor23375923@outlook.com';
        $email_subject = "New Form Submission";
        $email_body = "User Name: $usrnm.\n".
                        "User Mobile: $mobile.\n".
                            "Site Manager: $mgr.\n".
                                "Site Number: $siteNr.\n".
                                    "Site URL: $siteURL.\n";
        $to = "karina_malver@hotmail.com";
        $headers = "From: ".$email_from;
        $header .= "Reply-To: ".$email;
        
        mail($to,$email_subject, $email_body, $headers);
        header("Location: Form.php");
        
    }
    
?>