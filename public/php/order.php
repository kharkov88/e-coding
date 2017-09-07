<?php
$ALLOWED_DOMAINS=['http://localhost:3000/','https://radiant-journey-51966.herokuapp.com/'];
$fromDomain = $_SERVER['HTTP_REFERER'];
$length = iconv_strlen($fromDomain);
if(!empty($fromDomain)&&in_array($fromDomain,$ALLOWED_DOMAINS)){
    header('Access-Control-Allow-Origin:'. substr($fromDomain,0,$length-1) );
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
}  
    error_reporting(0);   
if(!empty($_POST['send'])) {

	$name = substr(htmlspecialchars(trim($_POST['name'])), 0, 300);
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
    $message = substr(htmlspecialchars(trim($_POST['message'])), 0, 3000);
	
	$ip = $_SERVER['REMOTE_ADDR'];

	$Nzakaz = rand(10000, 99999);

	$mess  = "Имя: <b>".$name."</b><br />";
    $mess .= "Email: <b>".$email."</b><br />";
    $mess .= "Сообщение: <b>".$message."</b><br />";
	
	$theme = "Заявка Z".$Nzakaz;

	mail("emperor343@gmail.com", $theme, $mess, "From: mysite.com <mymail@mail.ru>\nContent-Type: text/html;\n charset=utf-8\nX-Priority: 0");
	echo "<h3>Success!</h3>";   
    }
else {	
	echo "<h2>Error server!</h2>";	
}	
?>