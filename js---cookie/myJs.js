// JavaScript Document

function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]; 
}

//移动函数
function doMove(obj,step,end,attr,endFn){
	clearInterval(obj.timer);
	step = end>parseInt(getStyle(obj,attr)) ? step : -step;
	obj.timer = setInterval(function (){
		var nowLeft = parseInt(getStyle(obj,attr))+step;
		if(nowLeft>=end&&step>0||nowLeft<=end&&step<0){
			nowLeft = end;
		}
		obj.style[attr] = nowLeft+"px";
		if(parseInt(getStyle(obj,attr))==end){
			clearInterval(obj.timer);
			/*if(endFn){
				endFn();
			}*/
			endFn && endFn();
		}
	},30)
}

//时间调用函数
function bind(obj,evname,fn){
	if(obj.addEventListener){
		obj.addEventListener(evname,fn,false)
	}else{
		obj.attachEvent('on'+evname,function(){
			fn.call(obj);
		})
	}
}

//鼠标滚轮封装
function mouseScroll(obj,topFn,bottomFn){
	if(window.navigator.userAgent.indexOf("Firefox")>=0){
		obj.addEventListener("DOMMouseScroll",function (ev){
			ev = ev || event;
			where(ev) ? topFn() : bottomFn();
			ev.preventDefault();
		},false);
	}else{
		obj.onmousewheel = function (ev){
			ev = ev || event
			where(ev) ? topFn() : bottomFn();
			return false;
		}
	}
}
function where(ev){
	var b = true;
	if(ev.wheelDelta){
		b = ev.wheelDelta>0 ? true : false;
	}else{
		b = ev.detail<0 ? true : false;
	}
	return b;
}

//存储cookie的方法
 function setCookie(key,value,t){
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+t); 
    document.cookie = key+'='+encodeURI(value)+';expires='+oDate.toGMTString();
}

//获取cookie值的方法
function getCookie(key){
	var arr1 = document.cookie.split('; ');
	for(var i=0;i<arr1.length;i++){
		var arr2 = arr1[i].split('=');
		if(arr2[0]==key){
			return decodeURI(arr2[1]);
		}
	}
}

//删除cookie的方法
//让value为空，时间设置为过去
function removeCookie(key){
    setCookie(key,'',-1);
}
