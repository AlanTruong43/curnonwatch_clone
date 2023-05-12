$(document).ready(function(){

    $(".mini__product").hover(function(){
        $(this).find("i").css("background-color","white");
        $(this).find("i").css("color","black")
    },function(){
        $(this).find("i").css("background-color", "");
        $(this).find("i").css("color", "")
    })

    $(".collection li").click(function(){
        $(this).addClass(".collection__active");
    })
})