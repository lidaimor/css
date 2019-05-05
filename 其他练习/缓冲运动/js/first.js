var timer=null;
var nowLeft;
var bOn=true;

function Move(){
	nowLeft=1000;
	var iL1=0;
	var iL2=-4;
	timer=setInterval(function(){
		if(bOn==false){
			nowLeft=iL1;
			$("#cir").animate({left:nowLeft+"px"},700,"linear");
			iL1+=30;
			bOn=true;
			if(nowLeft>=$("#line").position().left+2){
				clearInterval(timer);
			}
		}
		if(bOn==true){
			nowLeft=1000+iL2;
			$("#cir").animate({left:nowLeft+"px"},700,"linear");
			iL2-=30;
			bOn=false;
		}
	},700)
}

$("button").on("click",Move);
