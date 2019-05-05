var oDiv=document.getElementById("gab");
var oUl=document.getElementsByTagName("ul")[0];
var aLi=oUl.getElementsByTagName("li");
for(var i=0;i<aLi.length;i++){
	del(i);
}
function del(i){
		aLi[i].onmousedown=function(ev){
		ev=ev||event;
		var disX=ev.clientX-this.offsetLeft;
		var disY=ev.clientY-this.offsetTop;
		document.onmousemove=function(ev){
			ev=ev||event;
			aLi[i].style.left=ev.clientX-disX+"px";
			aLi[i].style.top=ev.clientY-disY+"px";
			aLi[i].style.zIndex="2";
		}
		document.onmouseup=function(ev){
			ev=ev||event;
			console.log(ev.clientX+"鼠标");
			console.log(oDiv.offsetLeft+"DIV");
			if((ev.clientX>=oDiv.offsetLeft&&ev.clientX<=oDiv.offsetLeft+oDiv.offsetWidth)&&
			   (ev.clientY>=oDiv.offsetTop&&ev.clientY<=oDiv.offsetTop+oDiv.offsetHeight)){
				aLi[i].style.display='none';
			}else{
//				var j=i;
				aLi[i].style.left=(i%2)*100+'px';
//				j>1 ? j=1 : j=0;
				aLi[i].style.top=parseInt(i/2)*90+'px';
			}
			this.onmousedown=this.onmousemove=null;
		}
		return false;
	}
}
