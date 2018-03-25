<?php
require_once("model/database.php");
class users
{

public function login($param)
{
  $email=$param['email'];
  $password=$param['password'];
  $clsMyDB = new MyDatabase();
    $strCondition2 = "SELECT  *  FROM  user WHERE  `email` ='$email' and`password` = md5('$password')";
     $objSelect2 = $clsMyDB->fncSelectRecord($strCondition2);
     if(!$objSelect2)
     {
       $response[] =
       [
         'track_id' => '0',
         'status' => "false",
       ];
     }
     else{
       foreach ($objSelect2 as $value) {
         $track=md5($value['user_id'].$email);
         $response[] =
         [
           'track_id' => $track,
           'status' => "success",
         ];
       }
     }
       return $response;


}//loginuser

public function checkemail($param)
{
  $email=$param['email'];
  $clsMyDB = new MyDatabase();
    $strCondition2 = "SELECT  *  FROM  user WHERE  `email` ='$email'";
     $objSelect2 = $clsMyDB->fncSelectRecord($strCondition2);
     if(!$objSelect2)
     {
       $response[] =
       [
         'status' => "success",
       ];
     }
     else{
         $response[] =
         [
           'status' => "false",
         ];
     }
       return $response;


}//checkemail


public function adduser($param)
{
  $time_stamp=strtotime("now")+(3600*7);
  $created_at=date("Y-m-d G:i:s",$time_stamp);
  $email=$param['email'];
  $password=md5($param['password']);
  $username=$param['username'];
  $clsMyDB = new MyDatabase();
  $strinsert ="INSERT INTO  user (email,password,username,created_at) VALUES ('$email','$password','$username','$created_at')";
  $objInsert = $clsMyDB->fncInsertRecord($strinsert);

}//adduser

//SELECT * FROM user WHERE MD5(CONCAT(user_id,email))='a90b679965f4a3eb35554e4a4775c3ed'

}
?>
