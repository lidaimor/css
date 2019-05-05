var str = '';

$(".num").on({
    "click": function () {
        str += this.innerHTML;
        $("#p1").html(str);
    }
});

$("td").on({
    "mousedown": function () {
        $(this).css("backgroundColor", "#e6e6e6")
    },
    "mouseup": function () {
        $(this).css("backgroundColor", "snow")
    }
})

$("#cls").on({
    "click": function () {
        str = "";
        $("#p1").html(str);
    }
})
$("#del").on({
    "click": function () {
        str = str.substring(0, str.length - 1);
        $("#p1").html(str);
    }
})
$("#minus").on({
    "click": function () {
        str += this.innerHTML;
        $("#p1").html(str);
    }
})
