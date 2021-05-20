<?php
//specify the path to the thumbnail images
$directory = '../../assets/images/gallery_images';
//only load files with following extensions
$allowed_extensions = array('jpg', 'jpeg', 'gif', 'png');
//an array to separate the extension from each file
$file_parts = array();
//response message
$response = "";
// opens directory to parse images
$dir_handle = opendir($directory);
//iterates through all files
while ($file = readdir($dir_handle)){

    //first check for hidden files
    if (substr($file, 0, 1) != '.'){
        //split each file name to extract file extension
        $file_components = explode('.', $file);
        //grab the extension token
        $extension = strtolower(array_pop($file_components));
        // is this file a valid image. if so add it to the response
        if (in_array($extension, $allowed_extensions))
        {
            //build a response string using ~ symbol as a string seperator
            $response .=$file.'~';
        }
    }
}
closedir($dir_handle);
//return response while removing the last ~ separator
echo substr_replace($response,"",-1);
?>