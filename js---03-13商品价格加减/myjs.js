var oUl=document.getElementById("list");
var ali=oUl.getElementsByTagName("li");
var oP=document.getElementsByTagName("p")[0];
var oSum=oP.getElementsByTagName("span")[0];
var oMoney=oP.getElementsByTagName("span")[1];
var oRich=oP.getElementsByTagName("span")[2];
function Calculate(that){	
	var alist=document.getElementsByTagName("strong");
	var oInput=ali[that].getElementsByTagName("input");
	var oEm=ali[that].getElementsByTagName("em")[0];
	var oSpan1=ali[that].getElementsByTagName("span")[0];
	var oStrong=ali[that].getElementsByTagName("strong")[0];
	var aMoney=oUl.getElementsByTagName("span");
	var aone=oUl.getElementsByTagName("em");
	oInput[0].onclick=function(){
		var str=[0];
		var sum=0;
		var money=0;
		if(oStrong.innerHTML==0){
			oStrong.innerHTML=0;
		}else{
			oStrong.innerHTML--;
		}
		oSpan1.innerHTML=oStrong.innerHTML*parseFloat(oEm.innerHTML)+"元";
		for(var j=0;j<alist.length;j++){
			var x=j;
			sum += parseInt(alist[x].innerHTML);
			if(parseFloat(alist[x].innerHTML)>0){
				str.push(parseFloat(aone[x].innerHTML));
			}
		}
		for(var j=0;j<aMoney.length;j++){
			var m=j;
			money += parseFloat(aMoney[m].innerHTML);
		}
		var max=str[0];
		for(var i=0;i<str.length;i++){
			if(max<str[i]){
				max=str[i];
			}
		}
		console.log(str);
		oSum.innerHTML=sum;
		oMoney.innerHTML=money;
		oRich.innerHTML=max;
	}
	oInput[1].onclick=function(){
		var str=[0];
		var sum=0;
		var money=0;
		oStrong.innerHTML++;
		oSpan1.innerHTML=oStrong.innerHTML*parseFloat(oEm.innerHTML)+"元";
		for(var j=0;j<alist.length;j++){
			var x=j;
			sum += parseInt(alist[x].innerHTML);
			if(parseFloat(alist[x].innerHTML)>0){
				str.push(parseFloat(aone[x].innerHTML));
			}
		}
		for(var j=0;j<aMoney.length;j++){
			var m=j;
			money += parseFloat(aMoney[m].innerHTML);
		}
		var max=str[0];
		for(var i=0;i<str.length;i++){
			if(max<str[i]){
				max=str[i];
			}
		}
		console.log(str);
		oSum.innerHTML=sum;
		oMoney.innerHTML=money;
		oRich.innerHTML=max;
	}
}
for(var i=0;i<ali.length;i++){
	Calculate(i);
}
