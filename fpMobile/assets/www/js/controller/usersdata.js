document.write('<script src="js/url.js"></script>');

function usersdata(id){

  								var url = Url+"fp_ci/Api/User/"+id;
  								$.getJSON(url,function(result){
                      console.log(result);

                        $('#profilename').text(result.username);
                       $('.profile-thumbnail').attr('src',''+Url+'fp_ci/assets/'+result.user_photo);


  								});//get user data;

                  $('#home').attr('href','profile.html?'+id);
     							 $('#profile-settings').attr('href','edit-profile.html?'+id);
     			         $('#shops').attr('href','shops.html?'+id);
     			         $('#clinics').attr('href','clinics.html?'+id);
     							 $('#icon-home').attr('onclick','goHome('+id+')');
     							 $('#userid').attr('value',id);
                   $('#delete-account').attr('onclick','goDeleteAccount('+id+')');
                   $('#deletedAccount').attr('onclick','deletedAccount('+id+')');
                   $('#notifications').attr('onclick','notificationsPage('+id+')');

}


function editProfile(){

      var name = $('#name').val();
      var id = $('#userid').val();
      var username = $('#username').val();
      var gender = $('input[name="gender"]:checked').val();
      var address = $('#address').val();
      var contact_number = $('#contact_number').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var repassword  = $('#repassword').val();
      var hiddenpass = $('#hiddenpassword').val();



      if(password !="" && password!=null && repassword !="" && repassword!=null){

          if(password == repassword){
              var editDetails = {
                  'name': name,
                  'username':username,
                  'email':email,
                  'gender':gender,
                  'address':address,
                  'contact_number':contact_number,
                  'password':password
              };
              var url = Url+"fp_ci/Api/editUser/"+id;

              $.post(url,{data:editDetails},function(result){

              });
                alert('Profile Successfully Updated');
                window.location.href = "edit-profile.html?"+id;
          }
          else{
            $('#password').val("");
            $('#repassword').val("");
            $('#password').focus();
            alert('Password Mismatched');
          }
      }
      else{

          var editDetailsNp ={
            'name': name,
            'username':username,
            'email':email,
            'gender':gender,
            'address':address,
            'contact_number':contact_number,
            'password':hiddenpass
          };
          var url = Url+"fp_ci/Api/editUserNp/"+id;

          $.post(url,{data:editDetailsNp},function(result){

          });
            alert('Profile Successfully Updated');
            window.location.href = "edit-profile.html?"+id;


      }

}
