<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $fullName = $_POST["fullName"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  // Konfigurasi email
  $to = "mdonisyahtria@gmail.com"; // Ganti dengan alamat email pribadi Anda
  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

  // Isi email
  $emailContent = "Name: " . $fullName . "\n";
  $emailContent .= "Email: " . $email . "\n";
  $emailContent .= "Phone: " . $phone . "\n\n";
  $emailContent .= "Subject: " . $subject . "\n";
  $emailContent .= "Message: " . $message;

  // Kirim email
  if (mail($to, $subject, $emailContent, $headers)) {
    echo "success";
  } else {
    echo "error";
  }
}
?>
