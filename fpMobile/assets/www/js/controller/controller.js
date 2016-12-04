document.write('<script src="js/url.js"></script>');


window.onload =function(){
  $('#username').focus();
};

function login(){

      var username =$('#username').val();
      var password = $('#password').val();


      if(username=="" || password==""){
      alert("Please provide the fields!");

      $('#username').focus();
      }
      else{
      var logindata ={
      				'email':username,
      				'password':password
      			};
				 var url  = Url+"fp_ci/Api/Auth";
        $.ajax({
            url: url,
            data:{data:logindata},
            type: 'post',
            error: function(XMLHttpRequest, textStatus, errorThrown){
                alert('No Internet Connection, Please connect to the server!');
                location.reload();
            },
            success: function(result){

                console.log(result);
                if(result.toString()!='false'){
                     $.each(result,function(value,element){
                        window.location.href="profile.html?"+element.id;
                     });
                   }
               else{
                   alert('Incorrect username or password!', 'Authentication Error');
                   location.reload();
                 }

            }
        });

      }

}

function goHome(id){
  window.location.href = "profile.html?"+id;
}

function petprofile(id,petid){
  window.location.href= "petprofile.html?"+id+'&'+petid;
}

function clinicsprofile(clinicsid,userid){
  window.location.href = "clinicsprofile.html?"+userid+'&'+clinicsid;
}

function shopsprofile(shopsid,userid){
  window.location.href = "shopsprofile.html?"+userid+'&'+shopsid;
}

function clinicslocation(clinicsid,userid){
  window.location.href = "clinicslocation.html?"+userid+'&'+clinicsid;
}

function shopslocation(shopsid,userid){
  window.location.href ="shopslocation.html?"+userid+'&'+shopsid;
}

function Posts(id,shopsid){
  window.location.href="post.html?"+id+'&'+shopsid;
}

function clinicPosts(id,clinicid){
  window.location.href ="clinicposts.html?"+id+'&'+clinicid;
}

function commentlist(postid,userid){
  window.location.href = "commentlist.html?"+postid+'&'+userid;
}


function goDeleteAccount(id){
  window.location.href= "delete-account.html?"+id;
}

function deletedAccount(id){
  if(confirm('Are you sure you want to delete your account permanently ?')){


      var url = Url+"fp_ci/Api/deactivateAccount/"+id;
        $.getJSON(url,function(result){});
        alert('Your Account is Permanently Deleted.');
        window.location.href = "index.html";
  }
  else{
    location.reload();
  }
}


function notificationBadge(id){

  							var url = Url+"fp_ci/Api/notificationsBadge/"+id;

  							$.getJSON(url,function(result){
  									var a  = result.length;
  									if(a>=1){
  										$('.badge').html(a);
  									}
  							});
}

function notificationsPage(id){
  window.location.href = "notifications.html?"+id;
}

function notifications(id){
  var url = Url+"fp_ci/Api/notifications/"+id;

  $.getJSON(url,function(result){

          if(result.toString()=='false'){
            $('#notificationsList').append(
              '<div class="nd2-card card-media-right card-media-medium">'+
                  '<center><h4>You have no notifications yet.</h4></center>'+
                '</div>'
            );
          }
  $.each(result,function(value,element){

    $('#notificationsList').append(
      '<div class="nd2-card">'+


        '<div class="card-media">'+
          '<img src="'+Url+'fp_ci/assets/'+element.user_photo+'">'+

          '<div class="card-media-overlay with-background">'+

            '<div class="card-title has-supporting-text">'+
              '<h3 class="card-primary-title">'+element.username.charAt(0).toUpperCase()+element.username.slice(1)+'</h3>'+
              '<h5 class="card-subtitle">'+element.notify_message.charAt(0).toUpperCase()+element.notify_message.slice(1)+', Date: '+element.notify_datetime+'</h5>'+
            '</div>'+

            '<div class="card-action">'+
              '<div class="row between-xs">'+
                '<div class="col-xs-12">'+
                  '<div class="box" style="color:#fff">'+

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
}
