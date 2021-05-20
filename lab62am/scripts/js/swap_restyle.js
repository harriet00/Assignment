//javascript doc
//adapted from lab code

var counter = 0;

$(document).ready(function(){
  selectPage();
  //selectModel();
  
  function selectPage() {
  
    $('#home').show();
    $('#about').hide();
    $('#models').hide();
    $('#adverts').hide();
    $('#interaction').hide();
    $('#fantaDescription').hide();
    $('#cokezeroDescription').hide(); 
    $('#costaDescription').hide(); 
  
  
    $('#navHome').click(function(){
      $('#home').show();
      $('#about').hide();
      $('#models').hide();
      $('#adverts').hide();
      $('#interaction').hide();
      $('#fantaDescription').hide();
      $('#cokezeroDescription').hide(); 
      $('#costaDescription').hide(); 	  
    });
  
    $('#navAbout').click(function(){
      $('#home').hide();
      $('#about').show();
      $('#models').hide();
      $('#adverts').hide();
      $('#interaction').hide();
      $('#fantaDescription').hide();
      $('#cokezeroDescription').hide(); 
      $('#costaDescription').hide(); 	  
    });
  
    $('#navModels').click(function(){
      $('#home').hide();
      $('#about').hide();
      $('#models').show();
      $('#adverts').hide();
      $('#interaction').show(); 
      $('#fantaDescription').show();
      $('#cokezeroDescription').hide(); 
      $('#costaDescription').hide(); 
      $("#x3d_title_fanta").show();
	  	$("#x3d_title_cokezero").hide();
		  $("#x3d_title_costa").hide();
	  	$("#x3d_description_fanta").show();
		  $("#x3d_description_cokezero").hide();
		  $("#x3d_description_costa").hide(); 
    });

    $('#navAdverts').click(function(){
      $('#home').hide();
      $('#about').hide();
      $('#models').hide();
      $('#adverts').show();
      $('#interaction').hide();
      $('#fantaDescription').hide();
      $('#cokezeroDescription').hide(); 
      $('#costaDescription').hide(); 	  
    });
  }

  
  function selectModel(){
    $('#navFanta').click(function(){
      $('#fanta').show();
      $('#cokezero').hide();
      $('#costa').hide();
      $('#interaction').show(); 
      $('#fantaDescription').show();
      $('#cokezeroDescription').hide(); 
      $('#costaDescription').hide(); 
    });
  
    $('#navCokezero').click(function(){
      $('#fanta').hide();
      $('#cokezero').show();
      $('#costa').hide();
      $('#interaction').show(); 
      $('#fantaDescription').hide();
      $('#cokezeroDescription').show();
      $('#costaDescription').hide();  	  	  
    });
  
    $('#navCosta').click(function(){
      $('#fanta').hide();
      $('#cokezero').hide();
      $('#costa').show();
      $('#interaction').show(); 
      $('#fantaDescription').hide();
      $('#cokezeroDescription').hide(); 
      $('#costaDescription').show(); 	   
    });
  }
});


function fantaDescription() {
  $("button").click(function(){
    
    $("#fantaDescription").show();
    $("#cokezeroDescription").hide();
    $("#costaDescription").hide();
    
    $("#x3d_title_fanta").show();
    $("#x3d_title_cokezero").hide();
    $("#x3d_title_costa").hide();

    $("#x3d_description_fanta").show();
    $("#x3d_description_cokezero").hide();
    $("#x3d_description_costa").hide(); 
    }); 
}

function fantaAnimateDescription() {
  $("button").click(function(){
    
    $("#fantaDescription").show();
    $("#cokezeroDescription").hide();
    $("#costaDescription").hide();
    
    $("#x3d_title_fanta").show();
    $("#x3d_title_cokezero").hide();
    $("#x3d_title_costa").hide();

    $("#x3d_description_fanta").show();
    $("#x3d_description_cokezero").hide();
    $("#x3d_description_costa").hide(); 
    }); 
}

function cokezeroDescription() {
    $("button").click(function(){

      $("#fantaDescription").hide();
      $("#cokezeroDescription").show();
      $("#costaDescription").hide();
    
      $("#x3d_title_fanta").hide();
      $("#x3d_title_cokezero").show();
      $("#x3d_title_costa").hide();
  
      $("#x3d_description_fanta").hide();
      $("#x3d_description_cokezero").show();
      $("#x3d_description_costa").hide(); 
    }); 
}

function costaDescription() {
    $("button").click(function(){

      $("#fantaDescription").hide();
      $("#cokezeroDescription").hide();
      $("#costaDescription").show();
    
      $("#x3d_title_fanta").hide();
      $("#x3d_title_cokezero").hide();
      $("#x3d_title_costa").show();
  
      $("#x3d_description_fanta").hide();
      $("#x3d_description_cokezero").hide();
      $("#x3d_description_costa").show(); 
    }); 
}
  
      function swap(selected)
      {
         document.getElementById('home').style.display = 'none';
         document.getElementById('fanta').style.display = 'none';
         document.getElementById('cokezero').style.display = 'none';
         document.getElementById('costa').style.display = 'none';
  
         document.getElementById(selected).style.display = 'block';
  
  
      }

      function changeLook()
    {
       // document.getElementsByClassName('header').style.backgroundColor='yellow';
        document.getElementById('footer').style.backgroundColor='yellow';
        //document.getElementById('myHeader').style.backgroundColor='yellow';
        document.getElementById('home').style.fontFamily="New Times Roman";
        document.getElementById('theme').style.backgroundImage="url('./assets/images/fantaBackground.jpeg')";



        
    }

    function changeBack()
    {
     // document.getElementsByClassName('header').style.backgroundColor='#b9171c';
      document.getElementById('footer').style.backgroundColor='#b9171c';
      document.getElementById('home').style.fontFamily="Arial";
      document.getElementById('theme').style.backgroundImage="url('./assets/images/background.jpg')";

      //document.getElementById('navbar_coca_cola').style.backgroundColor='#b9171c';

    }