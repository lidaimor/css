var index=1;
var timer=null;

//添加container宽度
$(".container").css("width",$(".img1").outerWidth()*$(".img1").length);
//添加button
for(var i=0;i<$(".img1").length-2;i++){
	$("<button>").appendTo($(".btn"));
}
//初始化
$("button").eq(0).addClass("on");
$(".container").css("left",-600+"px");

//滚动函数
function scoll(iL){
	var nowLeft=$(".container").position().left + iL;
	$(".container").css("left" , nowLeft + "px");
	if(nowLeft < -3000){
		$(".container").css("left",-600+"px");
	}
	if(nowLeft == 0 ){
		$(".container").css("left", -3000 + "px");
	}
}

//左滑动
function Left(){
	scoll(600);
	index--;
	index = (index == 0 ? 5 : index);
	showButton();
}
//右滑动
function Right(){
	scoll(-600);
	index++;
	index = (index == 6 ? 1 : index);
	showButton();
}

$("#left").on("click",Left);
$("#right").on("click",Right);

//显示当前图片对应的按钮
function showButton(){
	$("button").eq(index-1).addClass("on").siblings().removeClass("on");
}

//自动滚动
function play(){
	clearInterval(timer);
	timer=setInterval(Right,1500);
}
function stop(){
	clearInterval(timer);
}
play();
$(".container").on({"mouseover" : stop , "mouseout" : play});