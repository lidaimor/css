var oBtn=document.getElementById('btn');
var oChange=document.getElementById('change');
var oWrap=document.getElementById('wrapper');
var oBox=document.getElementById('box');
var oSure=document.getElementById('sure');
var oReset=document.getElementById('reset');
oBtn.onclick=function(){
	oChange.style.display='block';
	oWrap.style.backgroundColor='rgba(0,0,0,0.3)';
}
oReset.onclick=function(){
	oBox.style.width='108px';
	oBox.style.height='108px';
	oBox.style.backgroundColor='white';
	oChange.style.display='none';
	oWrap.style.backgroundColor='#efefef';
}
var oText1=document.getElementById('text1');
var oText2=document.getElementById('text2');
oSure.onclick=function(){
	oBox.style[oText1.value]=oText2.value;
	oChange.style.display='none';
	oWrap.style.backgroundColor='#efefef';
}