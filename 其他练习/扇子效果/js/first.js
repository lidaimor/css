var arr=[1,2,3,2,1];
$(".card").on("click",function(){
    for(var i=0;i<$(".card").length;i++){
        $(".card")[i].style.zIndex=arr[i];
    }
    $(".card").eq($(this).index()).css({"zIndex":"4"});
})
