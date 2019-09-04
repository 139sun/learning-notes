## 封装ajax函数

function myAjax(option){
    var url = option.url;
    var methods = option.type||get;
    var data = option.data||undefined;
    var xhr = new XMLHttpRequest;
    var params = '';
   if(data){
       for(key in data){
           params += '&'+ key +'='+data[key]';
       }
       params = params.substr(1);
   };
   if(methods.toLowerCase == 'get'){
       if(params){
           url +='?'+params;
       }
       xhr.open(methods,url);
       xhr.send(null);
   }else{
       xhr.open(methods.url);
       xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
       xhr.send(params?params:null)
   }
   xhr.onreadystatechange = function(){
       if(readyState == 4&& xhr.status ==200){
          var res = JSON.prase(xhr.responseText);
          option.success(res);
       }
   }
}
## jquery方法
$.ajax({
        url:'test',//请求地址
        data:'name=fox&age=18',//发送的数据
        type:'GET',//请求的方式
        success:function (argument) {},// 请求成功执行的方法
        beforeSend:function (xhr) {},// 在发送请求之前调用,可以做一些验证之类的处理
        error:function (argument) {console.log(argument);},//请求失败调用
    })

