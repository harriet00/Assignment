//javascript gallery generator
// create XMLHttpRequest object for communicating with the we server
var xmlHttp = new XMLHttpRequest ();
//stores number of horizontal columns gallery has, if too large wont fit in browser window
var numberOfColumns = 4;
// stores newly generated gallery HTML code
var htmlCode = "";
//temporarily stores server response while code is generated
var response;

$(document).ready(function() {
    //set up the path to the php funciton that reads the image directory to find the thumbnail filenames
    var send = "scripts/hook.php";
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
            htmlCode += '<tr>';
            for (var i=0;i<response.length;i++){
                htmlCode += '<td id="gallery_cell">';
                htmlCode += '<a href="' + 'images/' +response[i] + '">';
                htmlCode += '<img src="images/' + response[i] + '" id="image_thumbnail"/>';
                htmlCode += '</a>';
                htmlCode += '</td>';
                if(((i+1)%numberOfColumns) == 0) {
                    htmlCode += '</tr><tr>';
                }
            }
            htmlCode += '</tr>';
            document.getElementById('gallery').innerHTML = htmlCode;
        }
    }
});