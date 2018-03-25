
//import User from './user.js';
// Dom7






class User {

login(data) {
  var param =data;
  var url = "http://"+hosturl+"/api/user/login/";
  app.request.json( url,{parameter:param}
  ,function( data ) {
  $.each(data, function(i, field){
if (field.status=="success") {
mainView.router.navigate("/");
localStorage.track_id=field.track_id;
track_id=localStorage.track_id;
}else {
app.dialog.alert('รหัสผ่านไม่ถูกต้อง','Grit');
}
});//each
});//getJSON
}//login

regis(data) {
  this.checkregis(data);
  /*
  var param =data;
  var url = "http://"+hosturl+"/api/user/login/";
  app.request.json( url,{parameter:param}
  ,function( data ) {
  $.each(data, function(i, field){
if (field.status=="success") {
mainView.router.navigate("/");
localStorage.track_id=field.track_id;
track_id=localStorage.track_id;
}else {
app.dialog.alert('Password Correct','Screen Me');
}
});//each
});//getJSON
*/
}//regis

checkregis(data) {
  var param =data;
  console.log(param);
  if (data.password!=data.re_password) {
  app.dialog.alert('Password และ Re Password ไม่ตรงกัน','Grit');
}else {
  alert("match");
this.checkemail(data);
}
}//checkregis

checkemail(data){
  var param =data;
  var status='';
  var url = "http://"+hosturl+"/api/user/checkemail/";
  app.request.json( url,{parameter:param}
  ,function( data ) {
  $.each(data, function(i, field){
    status=field.status;
});//each
if (status=="success") {
var ojb_user=new User();
ojb_user.adduser(param);
}else {
app.dialog.alert('email มีผู้ใช้งานแล้ว','Grit');
}
});//getJSON

}//checkemail

adduser(data){

  var param =data;
  var url = "http://"+hosturl+"/api/user/adduser/";
  app.request.json( url,{parameter:param}
  ,function( data ) {

});//getJSON
mainView.router.navigate("/user_profile/");
}//adduser

adduserdata(){
alert("adduser");
}







}//class user

class Feed {
getfeed(){
  var param =data;
  var url = "http://"+hosturl+"/api/feed/getfeed/";
  app.request.json( url,{parameter:param}
  ,function( data ) {
  $.each(data, function(i, field){

  });//each
  });//getJSON
}
}//class feed

getuser();



function getuser(){
if(localStorage.track_id)
{
track_id=localStorage.track_id;
console.log(track_id);
home();
//localStorage.clear();
//alert(user_id);
}
else
{
//  var ojb_user=new User();
//  ojb_user.login();
mainView.router.navigate("/login/");
}
}



$$(document).on("click", "#signup", function() {
alert("test");
mainView.router.navigate("/signup/");
//mainView.router.navigate("/signup/");
});

$$(document).on("click", "#resignup", function() {
  var formData = app.form.convertToData('#my-form2');
var ojb_user=new User();
ojb_user.regis(formData);

});

$$(document).on("click", "#signin", function() {
var formData = app.form.convertToData('#my-form');
var ojb_user=new User();
ojb_user.login(formData);

});




$$(document).on("click", "#sign_up_regis", function() {
  var ojb_user=new User();
  ojb_user.sign_up_regis();

});//click sign_up_regis

$$(document).on("click", "#test", function() {
  var text = [{"firstName":"John","lastName":"Doe" },{"firstName":"Anna","lastName":"Smith" }];
  var names = text.map(function(item) {
  return item['firstName'];
});

console.log(names);
mainView.router.navigate("/signup/user/"+names);
});//click sign_up_regis

function adddata(data) {
  //var res = data.split(',');
//  return res;
content="testrsdsdsd";
$$("#content2").append(content);

}


function home() {
mainView.router.navigate("/");
  /*
  $$("#content").html("");
  var content='test';
  $$("#content").append(content);
  */
}

$$(document).on("click", "#sign_in", function() {
  var email = $$('#email').val();
  var password = $$('#password').val();
    var url = "http://"+hosturl+"/screen/api/loginuser.php?jsoncallback=?";
    $$.getJSON( url, {
        email:email,
        password:password}
  ,function( data ) {
    $$.each(data, function(i, field){
    var msg=field.msg;
    if(msg=="no"){
    myApp.alert("User Or Password Worng", 'Screen Me!');
    }
    else{
      user_id=field.user_id;
      track_id=field.track_id;
      localStorage.user_id=field.user_id;
      localStorage.track_id=field.track_id;
      $$("#menu").css('display', 'block');
      home();
    }
    });
    });

});//click sign_in
