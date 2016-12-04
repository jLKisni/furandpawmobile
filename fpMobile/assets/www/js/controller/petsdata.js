document.write('<script src="js/url.js"></script>');

function myPets(id){

$(function(){

  var url = Url+"fp_ci/API/myPets/"+id;
    $.getJSON(url,function(result){
      console.log(result);

      if(result.toString()=='false'){
        $('#myPets').append(
          '<div class="nd2-card card-media-right card-media-medium">'+
              '<center><h3>Pets Not Available</h3></center>'+
            '</div>'
        );
      }
        $.each(result,function(value , element){
            $('#myPets').append(
                    '<div class="nd2-card">'+
                      '<div class="card-media">'+
                        '<img src="'+Url+'fp_ci/assets/'+element.pet_photo+'">'+

                        '<div class="card-media-overlay with-background">'+

                          '<div class="card-title has-supporting-text">'+
                            '<h3 class="card-primary-title">'+element.petname+' </h3>'+
                            '<h5 class="card-subtitle">'+element.breed+'</h5>'+
                          '</div>'+

                          '<div class="card-action">'+
                            '<div class="row between-xs">'+
                              '<div class="col-xs-12">'+
                                '<div class="box">'+
                                  '<a href="" onclick="petprofile('+id+','+element.id+')" class="ui-btn ui-btn-inline">See Pets</a>'+
                                '</div>'+
                              '</div>'+
                            '</div>'+
                          '</div>'+

                        '</div>'+

                      '</div>'+


                    '</div>'
            );
        });


    });

    });
}


function sellPets(){

  $(function(){
  var url = Url+"fp_ci/API/sellPets";
    $.getJSON(url,function(result){
      console.log(result);


            if(result.toString()=='false'){
              $('#sellPets').append(
                '<div class="nd2-card card-media-right card-media-medium">'+
                    '<center><h3>Pets Not Available</h3></center>'+
                  '</div>'
              );
            }
        $.each(result,function(value , element){
            $('#sellPets').append(
                    '<div class="nd2-card">'+
                      '<div class="card-media">'+
                        '<img src="'+Url+'fp_ci/assets/'+element.pet_photo+'">'+

                        '<div class="card-media-overlay with-background">'+

                          '<div class="card-title has-supporting-text">'+
                            '<h3 class="card-primary-title">'+element.petname+' </h3>'+
                            '<h5 class="card-subtitle">'+element.breed+'</h5>'+
                          '</div>'+

                          '<div class="card-action">'+
                            '<div class="row between-xs">'+
                              '<div class="col-xs-12">'+
                                '<div class="box">'+
                                  '<a href="" class="ui-btn ui-btn-inline" onclick="petprofile('+id+','+element.id+')">See Pets</a>'+
                                '</div>'+
                              '</div>'+
                            '</div>'+
                          '</div>'+

                        '</div>'+

                      '</div>'+


                    '</div>'
            );
        });


    });
    });

}

function petProfile(petid){
  $(function(){

  var url = Url+"fp_cilab/API/petProfile/"+petid;
    $.getJSON(url,function(result){

      console.log(result);

          $('#petprofile').append(
            '<div class="nd2-card">'+

              '<div class="card-title has-avatar">'+
                '<img class="card-avatar" src="'+Url+'fp_ci/assets/'+result.pet_photo+'">'+
                '<h3 class="card-primary-title">'+result.petname+'</h3>'+
                '<h5 class="card-subtitle">'+result.breed+'</h5>'+
              '</div>'+

              '<div class="card-media">'+
                '<img class="card-avatar" src="'+Url+'fp_ci/assets/'+result.pet_photo+'">'+
              '</div>'+

              '<div class="card-supporting-text has-action">'+
                '<strong>Pet Age: </strong> '+result.age+'<br>'+
                '<strong>Pet Breed: </strong> '+result.breed+'<br>'+
                '<strong>Pet Color: </strong> '+result.color+'<br>'+
                '<strong>Pet Gender: </strong> '+result.pet_gender+'<br><br>'+
                '<strong>Description: </strong> '+result.description+'<br>'+
              '</div>'+



            '</div>'
          );

      });

      });
}
