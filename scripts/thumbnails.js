window.onload = initPage;
//浏览器加载运行函数
function initPage(){
//查找thumbnails元素
thumbs = document.getElementById("thumbnailPane").getElementsByTagName("img");
//希望对每一个缩略图完成一次处理
for(var i=0;i<thumbs.length;i++){
  image = thumbs[i];
  //点击事件处理
  image.onclick = function(){
    detailURL = 'images/' + this.title + '-detail.jpg';
    document.getElementById("itemDetail").src = detailURL;
    getDetails(this.title);
  }
 }
}

//创建请求对象
function createRequest() {
  try {
    request = new XMLHttpRequest();
  } catch (tryMS) {
    try {
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (otherMS) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (failed) {
        request = null;
      }
    }
  }
  return request;
}

//处理返回商品信息，传入参数为img元素的title属性
function getDetails(itemName) {
  request = createRequest();
  //检查请求对象不为null，由此可以知道创建的对象是否有问题。
  if (request == null) {
       alert("Unable to create request");
       return; }
  //配置请求，escape()负责处理请求字符串中有疑问的字符。
 var url= "getDetails.php?ImageID=" + escape(itemName);
 request.open("GET", url, true);
 //设置回调函数
 request.onreadystatechange = displayDetails;
 //发送请求
  request.send(null);
}

function displayDetails() {
  //readyState指示请求已经完成，现在可以处理服务器返回的结果了。
   if (request.readyState == 4) {
        if (request.status == 200) {
              detailDiv = document.getElementById("description");
              detailDiv.innerHTML = request.responseText;
                      }
                     }
                   }
