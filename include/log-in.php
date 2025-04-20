<?php
session_start();

include('connection.php');
//login
if (isset($_POST['logT'])) {
  $err_s = 0; // start with no errors
  $userName = stripcslashes(strtolower($_POST['username']));
  $userPassword = $_POST["password"];


  if (empty($userName)) {
    $_SESSION['login_user_error'] = 'Please enter your name!!';
    $err_s = 1;
  }

  if (empty($userPassword)) {
    $_SESSION['login_pass_error'] = 'Please enter a password!';
    $err_s = 1;
    $_SESSION['show_login'] = true;
    header("Location: ../log-sign.php");
    exit();
  }
  /*if ($err_s == 1) {
    $_SESSION['show_login'] = true;
    header("Location: ../log-sign.php");
    exit();
  }*/
}
if ($err_s == 1) {
  $_SESSION['show_login'] = true; // tell the front-end to show the login panel
  header("Location: ../log-sign.php");
  exit();
}

if ($err_s == 0) {
  $sql = "SELECT Id ,Name, md5_pass FROM users WHERE Name='$userName'";
  $result = mysqli_query($conn, $sql);

  if (mysqli_num_rows($result) === 1) {
    $row = mysqli_fetch_assoc($result);

    if (password_verify($userPassword, $row['md5_pass'])) {
      $_SESSION['Name'] = $row['Name'];
      $_SESSION['Id'] = $row['Id'];
      header('location: ../indexSideBar.html');
      exit();
    } else {
      $_SESSION['login_pass_error'] = "Incorrect password.";
    }
  } else {
    $_SESSION['login_user_error'] = "User not found.";
  }
  // if errors, redirect back to login
  $_SESSION['show_login'] = true;
  header("Location: ../log-sign.php");
  exit();
}
