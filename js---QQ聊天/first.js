var oUl=document.getElementsByTagName("ul")[0];
var aInput=document.getElementsByTagName('input');
var oBody=document.body;
// var i=0;
aInput[2].onclick=function(){
	oUl.innerHTML+="<li><span>"+aInput[0].value+"</span></li>";
	aInput[0].value="";
}
aInput[1].onclick=function(){
	var x=confirm('确定要关闭窗口吗？');
	if(x==true){
		oBody.innerHTML='';
	}
}