var li_1 = document.getElementById("tab_content1");
var li_2 = document.getElementById("tab_content2");
var li_3 = document.getElementById("tab_content3");
var li_4 = document.getElementById("tab_content4");

var content_1 = document.getElementById("t_1");
var content_2 = document.getElementById("t_2");
var content_3 = document.getElementById("t_3");
var content_4 = document.getElementById("t_4");

li_1.onclick=function(){
    content_1.setAttribute("class", "box3 show");
    content_2.setAttribute("class", "box3 hide");
    content_3.setAttribute("class", "box3 hide");
    content_4.setAttribute("class", "box3 hide");
    console.log("aaa");
}
li_2.onclick=function(){
    content_2.setAttribute("class", "box3 show");
    content_1.setAttribute("class", "box3 hide");
    content_3.setAttribute("class", "box3 hide");
    content_4.setAttribute("class", "box3 hide");
    console.log("bbb");
}
li_3.onclick=function(){
    content_3.setAttribute("class", "box3 show");
    content_2.setAttribute("class", "box3 hide");
    content_1.setAttribute("class", "box3 hide");
    content_4.setAttribute("class", "box3 hide");
}
li_4.onclick=function(){
    content_4.setAttribute("class", "box3 show");
    content_2.setAttribute("class", "box3 hide");
    content_3.setAttribute("class", "box3 hide");
    content_1.setAttribute("class", "box3 hide");
}
