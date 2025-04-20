<?php
if (session_status() === PHP_SESSION_NONE) {
  session_start();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page| NoteBuds</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
  <link rel="stylesheet" href="log-sign.css">
</head>

<body>
  <div class="container" id="container">
    <div class="form-container sign-up">
      <form action="include/register_post.php" method="post">
        <h1>Create Account</h1>
        <div class="social-icons">
          <a href="#" class="icon"><i class="fa-brands fa-google" style="color: #333;"></i></a>

          <a href="#" class="icon"><i class="fa-brands fa-facebook" style="color:#333;"></i></a>

          <a href="#" class="icon"><i class="fa-brands fa-github" style="color: #333;"></i></a>

          <a href="#" class="icon"><i class="fa-brands fa-linkedin-in" style="color: #333;"></i></a>
        </div>
        <span>or use email for registration</span>
        <?php
        if (isset($_SESSION['user_error'])) {
          echo "<span style='color: red;
          font-weight: 500px;
          margin-top: 5px;'>" . $_SESSION['user_error'] . "</span>";
          unset($_SESSION['user_error']);
        }
        ?>
        <input type="text" name="fname" placeholder="Name" required>
        <?php
        if (isset($_SESSION['email_error'])) {
          echo "<span style=' color: red;
          font-weight: 500px;
          margin-top: 5px;'>" . $_SESSION['email_error'] . "</span>";
          unset($_SESSION['email_error']);
        }
        ?>

        <input type="email" name="email" placeholder="Email" required>
        <?php
        if (isset($_SESSION['pass_error'])) {
          echo "<span style=
          'color: red;
            font-weight: 500px;
            margin-top: 5px;'>" . $_SESSION['pass_error'] . "</span>";
          unset($_SESSION['pass_error']);
        }
        ?>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit" name="submit">Sign Up</button>
      </form>
    </div>
    <div class="form-container sign-in">

      <form action="include/log-in.php" method="POST">
        <h1>Sign In</h1>
        <div class="social-icons">
          <a href="#" class="icon"><i class="fa-brands fa-google" style="color: black;"></i></a>

          <a href="#" class="icon"><i class="fa-brands fa-facebook" style="color: black;"></i></a>

          <a href="#" class="icon"><i class="fa-brands fa-github" style="color: black;"></i></a>

          <a href="#" class="icon"><i class="fa-brands fa-linkedin-in" style="color: black;"></i></a>
        </div>
        <span>or use Name password</span>
        <?php
        if (isset($_SESSION['login_user_error'])) {
          echo "<span style='color: red;
          font-weight: 500px;
          margin-top: 5px;'>" . $_SESSION['login_user_error'] . "</span>";
          unset($_SESSION['login_user_error']);
        }
        ?>
        <input type="text" name="username" placeholder="Name">
        <?php
        if (isset($_SESSION['login_pass_error'])) {
          echo "<span style=
          'color: red;
            font-weight: 500px;
            margin-top: 5px;'>" . $_SESSION['login_pass_error'] . "</span>";
          unset($_SESSION['login_pass_error']);
        }
        ?>
        <input type="password" name="password" placeholder="Password">
        <a href="#">Forget Your Password</a>
        <button name="logT">Sign In</button>
      </form>
    </div>
    <div class="toggle-container">
      <div class="toggle">
        <div class="toggle-panel toggle-left">
          <h1> Welcome back</h1>
          <p>Enter your personal details to use all of site features</p>
          <button class="hidden" id="login"> Sign In</button>
        </div>
        <div class="toggle-panel toggle-right">
          <h1> Hello,Friend!</h1>
          <p>Register with your personal details to use all of site features</p>
          <button class="hidden" id="register"> Sign Up</button>
        </div>
      </div>
    </div>
  </div>
  <script>
    window.addEventListener("DOMContentLoaded", function() {
      <?php if (isset($_SESSION['show_login'])): ?>
        document.getElementById("container").classList.remove("right-panel-active");
        <?php unset($_SESSION['show_login']); ?>
      <?php endif; ?>
    });
  </script>
  <script src="log-sign.js"></script>

</body>

</html>