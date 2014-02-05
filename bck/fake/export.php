<?php
namespace Skynet;

class Export {
	private $filename;
	private static $instance;

	private function __construct($filename='dump.txt')
	{
		$this->filename = $filename;
	}

	public function add($data)
	{
		$fd = fopen($this->filename,'a+');
		fwrite($fd, $data);
		fclose($fd);
	}

	public static function getInstance()
	{
        if (self::$instance === null) {
        	self::$instance = new self();
        }
        return self::$instance;
	}
}
?>