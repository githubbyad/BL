<?php
$text = '<h1>Hello Test</h1>';
$path = 'test.asp';
$fp = fopen($path, 'w'); // Use 'a' to append.
if(!$fp){
echo 'File is not found';
}
fwrite($fp, $text);
fclose($fp);
?>
