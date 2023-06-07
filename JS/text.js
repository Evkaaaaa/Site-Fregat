
var str=document.getElementById('printt').innerHTML;
var i=str.length;

var a=0; // Сколько символов показать в самом начале.
function text() {if(a<=i) {
document.getElementById('printt').innerHTML = str.substring(0, a);
a++;

setTimeout("text()", 100); // Скорость печатания текста
}} text();