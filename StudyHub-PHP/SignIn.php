<?php
session_start();

$host = "localhost";
$user = "root";
$pass = "";
$db = "studyhub";

// Connect to DB
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST['email']);
    $password = $_POST['password'];

    // Check credentials
    $stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 1) {
        $stmt->bind_result($hashed_password);
        $stmt->fetch();

        if (password_verify($password, $hashed_password)) {
            // ✅ Redirect to HTML page (basic use)
            header("Location: dashboard.html");
            exit;
        } else {
            header("Location: signin.html?error=invalid_password");
            exit;
        }
    } else {
        header("Location: signin.html?error=email_not_found");
        exit;
    }

    $stmt->close();
}

$conn->close();
?>
