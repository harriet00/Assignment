$(document).ready(function(){

    //AJAX service request to get main text data from data.json
    $.getJSON('./model/data.json', function(jsonObj){
        console.log(jsonObj);
        //get home page main text data
        $('#title_home').html('<h2>' + jsonObj.pageTextData[0].title + '<h2>');
        $('#subTitle_home').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
        $('#description_home').html('<p>' + jsonObj.pageTextData[0].description + '</p>');

        //get home page ledt column text
        $('#title_left').html('<h2>' + jsonObj.pageTextData[1].title + '<h2>');
        $('#subTitle_left').html('<h3>' + jsonObj.pageTextData[1].subTitle + '</h3>');
        $('#description_left').html('<p>' + jsonObj.pageTextData[1].description + '</p>');

        //get centre column text
        $('#title_centre').html('<h2>' + jsonObj.pageTextData[2].title + '<h2>');
        $('#subTitle_centre').html('<h3>' + jsonObj.pageTextData[2].subTitle + '</h3>');
        $('#description_centre').html('<p>' + jsonObj.pageTextData[2].description + '</p>');

        //get right column text
        $('#title_right').html('<h2>' + jsonObj.pageTextData[3].title + '<h2>');
        $('#subTitle_right').html('<h3>' + jsonObj.pageTextData[3].subTitle + '</h3>');
        $('#description_right').html('<p>' + jsonObj.pageTextData[3].description + '</p>');

         //get fanta relevant text
         $('#title_fanta').html('<h2>' + jsonObj.pageTextData[4].title + '<h2>');
         $('#subTitle_fanta').html('<h3>' + jsonObj.pageTextData[4].subTitle + '</h3>');
         $('#description_fanta').html('<p>' + jsonObj.pageTextData[4].description + '</p>');

         $('#x3d_title_fanta').html('<h4>' + jsonObj.pageTextData[4].x3dModelTitle + '</h4>');
         $('#x3d_description_fanta').html('<p>' + jsonObj.pageTextData[4].x3dCreationMethod + '</p>');



         //get coke zero relevant text
         $('#title_cokezero').html('<h2>' + jsonObj.pageTextData[5].title + '<h2>');
         $('#subTitle_cokezero').html('<h3>' + jsonObj.pageTextData[5].subTitle + '</h3>');
         $('#description_cokezero').html('<p>' + jsonObj.pageTextData[5].description + '</p>');
         $('#x3d_title_cokezero').html('<h4>' + jsonObj.pageTextData[5].x3dModelTitle + '</h4>');
         $('#x3d_description_cokezero').html('<p>' + jsonObj.pageTextData[5].x3dCreationMethod + '</p>');

         //get costa relevant text
         $('#title_costa').html('<h2>' + jsonObj.pageTextData[6].title + '<h2>');
         $('#subTitle_costa').html('<h3>' + jsonObj.pageTextData[6].subTitle + '</h3>');
         $('#description_costa').html('<p>' + jsonObj.pageTextData[6].description + '</p>');
         $('#x3d_title_costa').html('<h4>' + jsonObj.pageTextData[6].x3dModelTitle + '</h4>');
         $('#x3d_description_costa').html('<p>' + jsonObj.pageTextData[6].x3dCreationMethod + '</p>');
         

         //get fanta gallery text
         $('#title_gallery').html('<h4>' + jsonObj.pageTextData[7].galleryTitle + '</h4>');
         $('#description_gallery').html('<p>' + jsonObj.pageTextData[7].galleryDescription + '</p>');

         //get coke gallery text
         $('#title_gallery2').html('<h4>' + jsonObj.pageTextData[7].galleryTitle + '</h4>');
         $('#description_gallery2').html('<p>' + jsonObj.pageTextData[7].galleryDescription + '</p>');


         //get costa gallery text
         $('#title_gallery3').html('<h4>' + jsonObj.pageTextData[7].galleryTitle + '</h4>');
         $('#description_gallery3').html('<p>' + jsonObj.pageTextData[7].galleryDescription + '</p>');

         //get fanta camera text
         $('#title_camera').html('<h4>' + jsonObj.pageTextData[8].CameraTitle + '</h4>');
         $('#subtitle_camera').html('<p>' + jsonObj.pageTextData[8].CameraSubtitle + '</p>');

         //get coke camera text
         $('#title_camera2').html('<h4>' + jsonObj.pageTextData[8].CameraTitle + '</h4>');
         $('#subtitle_camera2').html('<p>' + jsonObj.pageTextData[8].CameraSubtitle + '</p>');

         //get coke camera text
         $('#title_camera3').html('<h4>' + jsonObj.pageTextData[8].CameraTitle + '</h4>');
         $('#subtitle_camera3').html('<p>' + jsonObj.pageTextData[8].CameraSubtitle + '</p>');

         //get fanta logo picture
         $('#fanta_logo').html('<img src="' + jsonObj.pageTextData[9].fantaLogo + '"class="card-img-top img-fluid img-tumbnail">');
 
         //get cokezero logo picture
         $('#cokezero_logo').html('<img src="' + jsonObj.pageTextData[9].cokezeroLogo + '"class="card-img-top img-fluid img-tumbnail">');

         //get costa logo picture
         $('#costa_logo').html('<img src="' + jsonObj.pageTextData[9].costaLogo + '"class="card-img-top img-fluid img-tumbnail">');

         //get fanta x3d model
         $('#fanta_model').html('<inline url="' + jsonObj.pageTextData[10].x3dFantaModel + '"></inline>');

         //get about page text
         $('#title_about').html('<h1>' + jsonObj.pageTextData[11].aboutTitle + '</h1>');
         $('#description_about').html('<p>' + jsonObj.pageTextData[11].aboutDescription + '</p>');

          //get statement of originality text
          $('#title_statement').html('<h1>' + jsonObj.pageTextData[12].statementTitle + '</h1>');
          $('#description_statement').html('<p>' + jsonObj.pageTextData[12].statementDescription + '</p>');

          //get slideshow coke zero text main text data
        $('#title_coke_slide').html('<h1>' + jsonObj.pageTextData[13].title + '</h1>');
        $('#subTitle_coke_slide').html('<h3>' + jsonObj.pageTextData[13].subTitle + '</h3>');
        $('#description_coke_slide').html('<p>' + jsonObj.pageTextData[13].description + '</p>');

        //get slideshow costa text main text data
        $('#title_costa_slide').html('<h1>' + jsonObj.pageTextData[14].title + '</h1>');
        $('#subTitle_costa_slide').html('<h3>' + jsonObj.pageTextData[14].subTitle + '</h3>');
        $('#description_costa_slide').html('<p>' + jsonObj.pageTextData[14].description + '</p>');

    });
});