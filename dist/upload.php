<?php
if(isset($_FILES['uploadfile']['name'])){

   /* Getting file name */
   $filename = $_FILES['uploadfile']['name'];

   $location = "upload/".$filename;

   $response = 0;
   if(move_uploaded_file($_FILES['uploadfile']['tmp_name'],$location)){
    $response = "OK";
    }

   echo $response;
   exit;
}

echo 0;