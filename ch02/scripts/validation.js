window.onload = initPage;

//当用户离开表单上的username域时调用checkUsername()函数
function initPage(){
  document.getElementById("username").onblur = checkUsername;
  document.getElementById("register").disabled = true;
}


  //检查用户名是否注册
function checkUsername(){
  //修改元素的className属性改变CSS类
  document.getElementById("username").className = "thinking";
  request = createRequest();
  if (request == null)
      alart("Unable to create request");
  else{
      var theName = document.getElementById("username").value;
      //清理用户输入的内容，以防止文本中有空格或问号等字符
      var username = escape(theName);
      var url = "checkName.php?username=" + username;
      //howUsernameStatus回调函数
      request.onreadystatechange = showUsernameStatus;
      request.open("GET",url,true);
      request.send(null);
    }
}

//浏览器得到服务器的响应后更新页面
function showUsernameStatus(){
  if(request.readyState == 4){
    if(request.status == 200){
      if(request.responseText == "okay"){
        document.getElementById("username").className = "approved";
        document.getElementById("register").disabled = false;
      }
      else{
        document.getElementById("username").className = "denied";
        document.getElementById("username").focus();
        document.getElementById("username").select();
        document.getElementById("register").disabled = true;
      }
    }
  }

}
