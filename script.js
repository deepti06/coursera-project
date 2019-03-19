
var input = document.querySelector("input");

input.addEventListener("keyup",function(){
    var str = input.value; 
    var num=0;
    for(var i=0;i<str.length;i++){
        num += str.charCodeAt(i);
    }
    var display = document.querySelector("#v1");
    v1.textContent = num;
});