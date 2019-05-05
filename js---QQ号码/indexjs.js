var oInput=document.getElementsByTagName("input");
var oText=oInput[0];
oInput[1].onclick=function(){
	var num=oInput[0].value;
	if(num!=null && parseInt(num)==num && 
	   num.charAt(0)!= 0 && (num.length>=5 &&num.length<=10)){
		alert("该QQ号合法！");
	}else{
		alert("该QQ号不合法！");
	}
}