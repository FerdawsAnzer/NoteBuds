 <?php
  $conn = mysqli_connect('localhost', 'root', '', 'userdata');
  if (!$conn) {
    die('Error' . mysqli_connect_error());
  }
  ?>