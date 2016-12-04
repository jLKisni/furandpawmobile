document.write('<script src="js/url.js"></script>');

function postlist(id,userid){
  var url = Url+"fp_ci/Api/Posts/"+id;
  $.getJSON(url,function(result){
    console.log(result);
    if(result.toString()=='false'){
      $('#postslist').append(
        '<div class="nd2-card card-media-right card-media-medium">'+
            '<center><h4>No Post Available</h4></center>'+
          '</div>'
      );
    }
    $.each(result,function(value,element){

      $('#postslist').append(
        '<div class="nd2-card card-media-right card-media-medium">'+

              '<div class="card-media">'+
                '<img src="'+Url+'fp_ci/assets/'+element.attachment+'">'+
              '</div>'+

              '<div class="card-title has-supporting-text">'+
                '<h5 class="card-subtitle">'+element.description+'</h5>'+
              '</div>'+

              '<div class="card-action">'+
                '<div class="row between-xs">'+
                  '<div class="col-xs-12">'+
                    '<div class="box">'+
                    '<a href="" onclick="comment('+element.post_id+','+userid+')" class="ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" style="text-transform:none;><i class="fa fa-comment fa-lg" style="margin-right:5px;"></i>Comment</a>'+
                    '<a href="" onclick="commentlist('+element.post_id+','+userid+')" class="ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" style="text-transform:none;><i class="fa fa-comments fa-lg" style="margin-right:5px;"></i>See Comments</a>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+

          '</div>'

      );

    });

  });

}

function clinicpostlist(clinicid,userid){
  var url = Url+"fp_ci/Api/clinicsPosts/"+clinicid;
  $.getJSON(url,function(result){
    console.log(result);
    if(result.toString()=='false'){
      $('#postslist').append(
        '<div class="nd2-card card-media-right card-media-medium">'+
            '<center><h4>No Post Available</h4></center>'+
          '</div>'
      );
    }
    $.each(result,function(value,element){

      $('#postslist').append(
        '<div class="nd2-card card-media-right card-media-medium">'+

              '<div class="card-media">'+
                '<img src="../fp_ci/assets/'+element.attachment+'">'+
              '</div>'+

              '<div class="card-title has-supporting-text">'+
                '<h5 class="card-subtitle">'+element.description+'</h5>'+
              '</div>'+

              '<div class="card-action">'+
                '<div class="row between-xs">'+
                  '<div class="col-xs-12">'+
                    '<div class="box">'+
                      '<a href="" onclick="comment('+element.post_id+','+userid+')" class="ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" style="text-transform:none;><i class="fa fa-comment fa-lg" style="margin-right:5px;"></i>Comment</a>'+
                      '<a href="" onclick="commentlist('+element.post_id+','+userid+')" class="ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" style="text-transform:none;><i class="fa fa-comments fa-lg" style="margin-right:5px;"></i>See Comments</a>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+

          '</div>'

      );

    });

  });
}


function comment(postid,id){

  var msg = window.prompt("Write some comments !");
  if(msg){
    var url = Url+"fp_ci/Api/Comments";

    var msgdata = {
      'postid': postid,
      'userid':id,
      'message':msg
    };

    $.post(url,{data:msgdata},function(result){

    });

    alert('Successfully Sent');
    location.reload();

  }
  else{
    location.reload();
  }
}


function commentslist(postid,userid){

  var url = Url+"fp_ci/Api/CommentList/"+postid;
  $.getJSON(url,function(result){
    console.log(result);
    if(result.toString()=='false'){
      $('#commentslist').append(
        '<div class="nd2-card card-media-right card-media-medium">'+
            '<center><h4>No Post Available</h4></center>'+
          '</div>'
      );
    }
    $.each(result,function(value,element){


      if(element.ownable_id == userid){

        $('#commentslist').append(
          '<div class="nd2-card card-media-right card-media-medium">'+

                '<div class="card-media">'+
                  '<img src="'+Url+'fp_ci/assets/'+element.user_photo+'">'+
                '</div>'+

                '<div class="card-title has-supporting-text">'+
                	'<h3 class="card-primary-title">-'+element.username.charAt(0).toUpperCase()+element.username.slice(1)+'-</h3>'+
                  '<h5 class="card-subtitle">'+element.message+'</h5>'+
                '</div>'+

                '<div class="card-action">'+
                  '<div class="row between-xs">'+
                    '<div class="col-xs-12">'+
                      '<div class="box">'+
                        '<a href="" onclick="updateComment('+element.id+',\''+element.message+'\')" class="ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" style="text-transform:none;><i class="fa fa-comment fa-lg" style="margin-right:5px;"></i>Update Comment</a>'+
                        '<a href="" onclick="deleteComment('+element.id+')" class="ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" style="text-transform:none;><i class="fa fa-comments fa-lg" style="margin-right:5px;"></i>Delete Comment</a>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>'+

            '</div>'

        );

      }
      else{
        $('#commentslist').append(
          '<div class="nd2-card card-media-right card-media-medium">'+

                '<div class="card-media">'+
                  '<img src="'+Url+'fp_ci/assets/'+element.user_photo+'">'+
                '</div>'+

                '<div class="card-title has-supporting-text">'+
                '<h3 class="card-primary-title">-'+element.username.charAt(0).toUpperCase()+element.username.slice(1)+'-</h3>'+
                  '<h5 class="card-subtitle">'+element.message+'</h5>'+
                '</div>'+


            '</div>'

        );
      }



    });

  });

}


function updateComment(commentid,message){
  var msg = window.prompt("Update your comment.",message.charAt(0).toUpperCase()+message.slice(1));
  if(msg){
    var url = Url+"fp_ci/Api/updateComments";

    var msgdata = {
      'commentid':commentid,
      'message':msg
    };

    $.post(url,{data:msgdata},function(result){
    });
        alert('Successfully Updated');
        location.reload();

  }
  else{
    location.reload();
  }
}

function deleteComment(commentid){

  if(confirm('Are you sure you want to delete this comment ?')){
    var url = Url+"fp_ci/Api/deleteComment/"+commentid;
    $.getJSON(url,function(result){});
    alert('Successfully Deleted');
    location.reload();
  }
  else{
    location.reload();
  }


}
