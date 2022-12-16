<?php
$name = $_POST['name'];
$phone = $_POST['phone'];

if ($name && $phone) {
  $to = 'info@asiapharma.tj';
  $subject = 'Новое сообщение из сайта asiapharm.tj';
  $message = "Новый запрос о бесплатной консультации. Имя: $name. Телефон: $phone";

  $headers = 'From: test@demo.asiapharm.tj' . "\r\n" .
    'Reply-To: test@demo.asiapharm.tj' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    header("Location: http://asiapharm.tj/");
    die();
  } else {
    echo "Сервис временно не работает!";
  }
}
