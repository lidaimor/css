var f=0.1; //摩擦系数
var iH=document.documentElement.clientHeight-70;
var timer=null;
var iT=$("div").position().top;
var nowT=0;

function down(){
	timer=setInterval(function(){
		if(nowT == iH){
			iT=iT+f*iT;
			if(iT>=iH){
				$("div").css({top:iH+"px"});
				clearInterval(timer);
			}else{
				$("div").animate({top:iT+"px"},500,"linear");
				nowT=iT;
			}
		}else{
			$("div").animate({top:iH +"px"},500,"linear");
			$("div")[0].style.top=iH +"px";
			nowT=iH;
		}	
	},500);	
}
$("button").on("click",down);