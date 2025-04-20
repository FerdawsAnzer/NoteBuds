<?php
session_start();
include('connection.php');

if (isset($_POST['submit'])) {
  $err_s = 0; //error  flag to track any validation errors
  $username = htmlentities(mysqli_real_escape_string($conn, strtolower($_POST['fname'])));
  $userEmail = htmlentities(mysqli_real_escape_string($conn, $_POST["email"]));
  $userPassword = htmlentities(mysqli_real_escape_string($conn, $_POST["password"]));

  //to check if the user name already exist in the database if it was it need to check
  $check_user = "SELECT *FROM `users`  WHERE Name='$username'";
  $check_result = mysqli_query($conn, $check_user);
  $num_rows = mysqli_num_rows($check_result);
  if ($num_rows != 0) {
    $_SESSION['user_error'] = 'Your name already exist! Try again';
    $err_s = 1;
  }


  // Validate username
  if (empty($username)) {
    $_SESSION['user_error'] = 'Please enter your name!!';
    $err_s = 1;
  } else if (strlen($username) < 6) {
    $_SESSION['user_error'] = 'Your name needs to have a minimum of 6 letters';
    $err_s = 1;
  } else if (filter_var($username, FILTER_VALIDATE_INT)) {
    $_SESSION['user_error'] = 'Please enter a valid username, not a number <br>';
    $err_s = 1;
  }

  // Validate email
  if (!filter_var($userEmail, FILTER_VALIDATE_EMAIL)) {
    $_SESSION['email_error'] = 'Please enter a valid email!';
    $err_s = 1;
  }

  // Validate password
  if (empty($userPassword)) {
    $_SESSION['pass_error'] = 'Please enter a password!';
    $err_s = 1;
  } else if (strlen($userPassword) < 6) {
    $_SESSION['pass_error'] = 'Password needs at least 6 characters!';
    $err_s = 1;
  }

  // Insert into DB if no errors
  if ($err_s == 0 && $num_rows == 0) {
    // hash the password for security
    $encryptedpass =  password_hash($userPassword, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users(Name, email, password, md5_pass) VALUES('$username','$userEmail', '$userPassword', '$encryptedpass')";
    if (mysqli_query($conn, $sql)) {
      //if insert successful , go to main page 
      header('Location: ../indexSideBar.html');
      exit();
    } else {
      $_SESSION['db_error'] = "Database error: " . mysqli_error($conn);
      header("Location: ../log-sign.php");
      exit();
    }
  } else {
    header("Location: ../log-sign.php");
    exit();
  }
}
