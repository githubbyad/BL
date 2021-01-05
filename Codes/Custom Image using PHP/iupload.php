<?php
    if ($_POST){
        foreach($_FILES as $field => $file){
        $file_name = $_POST["fname"]; // filename
        $host_name = $_POST["hname"]; // hostname
        $file_temp_name = $file["tmp_name"];
        $file_type = $file["type"];
        $file_size = $file['size'];
        $file_error = $file["error"];
        $url = 'D:/AppFiles/' . $host_name . '/' . $file_name; 
        if(move_uploaded_file($file_temp_name, $url)) {
            ?>Yes<?php
        }
    }
}
?>
