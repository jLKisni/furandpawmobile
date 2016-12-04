document.write('<script src="js/url.js"></script>');


function getAllShops(id){
  var url = Url+"fp_ci/Api/Shops/"
  $.getJSON(url,function(result){
    console.log(result);
    $.each(result,function(value,element){

       var str = element.address;
       var location = str.split(" ");
       var i = 0;
       do{
           location[i] += "+";
           i++;
       } while(i < location.length - 1);


       var newlocation = location.join().replace(/,/g,'');

        $('#shopslist').append(
          '<li><div class="nd2-card card-media-right card-media-medium">'+

                '<div class="card-media">'+
                  '<img src="'+Url+'fp_ci/assets/'+element.shop_photo+'">'+
                '</div>'+

                '<div class="card-title has-supporting-text">'+
                  '<h3 class="card-primary-title" style="font-size:16px;">'+element.name+'</h3>'+
                  '<h5 class="card-subtitle" style="font-size:12px;">'+element.address+'</h5>'+
                  '<h5 class="card-subtitle" style="font-size:12px;">'+element.contact_number+'</h5>'+
                  '<div class="clinicslocation">'+
                      '<br>'+
                  '<h5>Location</h5>'+

                  '<div style="text-decoration:none; overflow:hidden; height:200px; max-width:100%;">'+
                      '<div id="embed-map-canvas" style="height:100%; width:100%;max-width:100%;">'+
                          '<iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q='+newlocation+'y&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe>'+
                      '</div>'+
                  '</div>'+
                  '</div>'+
                '</div>'+

                '<div class="card-action">'+
                  '<div class="row between-xs">'+
                    '<div class="col-xs-12">'+
                      '<div class="box">'+
                        '<a href="" onclick="shopslocation('+element.id+','+id+')" class="ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button"><i class="fa fa-map-marker fa-lg" style="margin-right:5px;"></i>See Location</a>'+
                        '<a href="" onclick="shopsprofile('+element.id+','+id+')" class="ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button"><i class="fa fa-info-circle fa-lg" style="margin-right:5px;"></i>View Details</a>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>'+

            '</div>'+
          '</li>'

        );
    });
  });
}


function getAllClinics(id){
  var url = Url+"fp_ci/Api/Clinics/";
  $.getJSON(url,function(result){

    $.each(result,function(value,element){
       var str = element.address;
       var location = str.split(" ");
       var i = 0;
       do{
           location[i] += "+";
           i++;
       } while(i < location.length - 1);


       var newlocation = location.join().replace(/,/g,'');

        $('#shopslist').append(
          '<li><div class="nd2-card card-media-right card-media-medium">'+
                '<input type="hidden" id="clinicsid" value="'+element.id+'">'+
                '<div class="card-media">'+
                  '<img src="'+Url+'fp_ci/assets/'+element.vet_photo+'">'+
                '</div>'+

                '<div class="card-title has-supporting-text">'+
                  '<h3 class="card-primary-title" style="font-size:16px;">'+element.name+'</h3>'+
                  '<h5 class="card-subtitle" style="font-size:12px;">'+element.address+'</h5>'+
                  '<h5 class="card-subtitle" style="font-size:12px;">'+element.contact_number+'</h5>'+
                  '<div class="clinicslocation">'+
                      '<br>'+
                  '<h5>Location</h5>'+

                  '<div style="text-decoration:none; overflow:hidden; height:200px; max-width:100%;">'+
                      '<div id="embed-map-canvas" style="height:100%; width:100%;max-width:100%;">'+
                          '<iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q='+newlocation+'y&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe>'+
                      '</div>'+
                  '</div>'+
                  '</div>'+
                '</div>'+

                '<div class="card-action">'+
                  '<div class="row between-xs">'+
                    '<div class="col-xs-12">'+
                      '<div class="box">'+
                        '<a href="" onclick="clinicslocation('+element.id+','+id+')" class="ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button"><i class="fa fa-map-marker fa-lg" style="margin-right:5px;"></i>See Location</a>'+
                        '<a href="" onclick="clinicsprofile('+element.id+','+id+')" class="ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button"><i class="fa fa-info-circle fa-lg" style="margin-right:5px;"></i>View Details</a>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>'+

            '</div>'+
          '</li>'


        );
    });

  });
}


function getClinicsProfile(id,clinicsid){

  var url = Url+"fp_ci/Api/clinicsProfile/"+clinicsid;
  $.getJSON(url,function(result){
      console.log(result);
      $('#clinicsprofile').append(
        '<div class="nd2-card">'+

          '<div class="card-title has-avatar">'+
            '<img class="card-avatar" src="../fp_ci/assets/'+result.vet_photo+'">'+
            '<h3 class="card-primary-title">'+result.name+'</h3>'+
            '<h5 class="card-subtitle">'+result.address+'</h5>'+
          '</div>'+

          '<div class="card-media">'+
            '<img class="card-avatar" src="'+Url+'fp_ci/assets/'+result.vet_photo+'">'+
          '</div>'+

          '<div class="card-supporting-text has-action">'+
            '<strong>Clinics Contact #: </strong> '+result.contact_number+'<br>'+
          '</div>'+

           '<div class="card-action">'+
             '<div class="row between-xs">'+
               '<div class="col-xs-12">'+
                 '<div class="box">'+
                      '<a href="" onclick="clinicPosts('+id+','+result.id+')" class="ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" style="text-transform:none;"><i class="fa fa-comments fa-lg" style="margin-right:5px;"></i>View Posts</a>'+
                 '</div>'+
               '</div>'+
             '</div>'+
           '</div>'+

        '</div>'
      );

  });

}

function getShopsProfile(id,shopsid){

  var url = Url+"fp_ci/Api/shopsProfile/"+shopsid;
  $.getJSON(url,function(result){
      console.log(result);
      $('#shopsprofile').append(
        '<div class="nd2-card">'+

          '<div class="card-title has-avatar">'+
            '<img class="card-avatar" src="'+Url+'fp_ci/assets/'+result.shop_photo+'">'+
            '<h3 class="card-primary-title">'+result.name+'</h3>'+
            '<h5 class="card-subtitle">'+result.address+'</h5>'+
          '</div>'+

          '<div class="card-media">'+
            '<img class="card-avatar" src="'+Url+'fp_ci/assets/'+result.shop_photo+'">'+
          '</div>'+

          '<div class="card-supporting-text has-action">'+
            '<strong>Clinics Contact #: </strong> '+result.contact_number+'<br>'+
          '</div>'+

          '<div class="card-action">'+
            '<div class="row between-xs">'+
              '<div class="col-xs-12">'+
                '<div class="box">'+
                    '<a href="" onclick="Posts('+id+','+result.id+')" class="ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" style="text-transform:none;"><i class="fa fa-comments fa-lg" style="margin-right:5px;"></i>View Posts</a>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+

        '</div>'
      );

  });

}
