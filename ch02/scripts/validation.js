window.onload = initPage;

//当用户离开表单上的username域时调用checkUsername()函数
function initPage(){
  document.getElementById(username).onblur = checkUsername;
}

  //检查用户名是否注册
function checkUsername(){

}

//浏览器得到服务器的响应后更新页面
function showUsernameStatus(){
  
}
