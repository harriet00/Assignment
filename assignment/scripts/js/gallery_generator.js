//javascript gallery generator
// create XMLHttpRequest object for communicating with the we server


$(document).ready(function() {

    var xmlHttp = new XMLHttpRequest ();
    //stores number of horizontal columns gallery has, if too large wont fit in browser window
    //var numberOfColumns = 4;
    // stores newly generated gallery HTML code
    var htmlCode = "";
    //temporarily stores server response while code is generated
    var response;
    //set up the path to the php funciton that reads the image directory to find the thumbnail filenames
    var send = "scripts/php/hook.php";
    //open connection to web server
    xmlHttp.open("GET", send, true);
    //tell the server that the client has no outgoing message i.e. we are sending nothing to the server
    xmlHttp.send(null);
    //check we get a valid server response
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4) {
            //response handler code
            //alert(xmlHttp.responsetext);
            response = xmlHttp.responseText.split("~");
            //htmlCode += '<tr>';
            for (var i=0;i<response.length;i++){
                //htmlCode += '<td id="gallery_cell">';
                htmlCode += '<a href="assets/images/gallery_images/' +response[i] + ' ">';
                //htmlCode += '<img src="images/' + response[i] + '" id="image_thumbnail"/>';
                htmlCode += '<img class="card-img-top img-thumbnail" src="assets/images/gallery_images/' +response[i] + '"/>';
                htmlCode += '</a>';
                //htmlCode += '</td>';
                //if(((i+1)%numberOfColumns) == 0) {
                //    htmlCode += '</tr><tr>';
              //  }
            }
           // htmlCode += '</tr>';
            document.getElementById('gallery').innerHTML = htmlCode;

            document.getElementById('gallery_fanta').innerHTML = htmlCode;
            document.getElementById('gallery_cokezero').innerHTML = htmlCode;
            document.getElementById('gallery_costa').innerHTML = htmlCode;
        }
    }

});