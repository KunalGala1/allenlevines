<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $body = "name: " . $name . "\n" . "email: " . $email . "\n" . $message;

    // mail
    mail("contact@allenlevines.com", $subject, $body);
    header("location: contact.html?mailsent");
} else {
    header("location: contact.html?error=unauthorized");
}
