// var div = document.getElements("jiangnan");
// // 获取3个嵌套的div元素
// for(var i=0;i<div.length;i++){    // 遍历嵌套的div元素
//     div[i].onmouseover = function(e){   // 注册移过事件处理函数
//         this.style.border = "solid blue";
//     }
//     div[i].onmouseout = function(){   // 注册移出事件处理函数
//         this.style.border = "solid red";
//     }
// }

let Ojiangnan = document.getElementById("jiangnan");
let Op1 = document.getElementById("p1");
Ojiangnan.onmouseover = function(){
    Op1.style.color = "red";
}
Ojiangnan.onmouseout = function(){
    Op1.style.color = "black";
}

let Olvwu = document.getElementById("lvwu");
let Op2 = document.getElementById("p2");
Olvwu.onmouseover = function(){
    Op2.style.color = "red";
}
Olvwu.onmouseout = function(){
    Op2.style.color = "black";
}

let Odieyan = document.getElementById("dieyan");
let Op3 = document.getElementById("p3");
Odieyan.onmouseover = function(){
    Op3.style.color = "red";
}
Odieyan.onmouseout = function(){
    Op3.style.color = "black";
}