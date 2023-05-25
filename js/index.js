$(document).ready(function(){

    $(".mini__product").hover(function(){
        $(this).find("i").css("background-color","white");
        $(this).find("i").css("color","black")
    },function(){
        $(this).find("i").css("background-color", "");
        $(this).find("i").css("color", "")
    })

    

    $("#collection1").click(function(){
        $("div.collection").css("color","black");
        $("ul.collection li a").css("color","black");
        $("ul.collection li").css("border-top","2px solid black")
        $(this).css("border-top","2px solid white")
        $("div.collection img").attr("src","img index/banner__collection1.webp");
        $("div.collection span").text("#Curnonwatch #MORAINE");
        $("div.collection h1").text("MORAINE COLLECTION");
        $("div.collection p").text("Nét tối giản, nữ tính nhưng không kém phần năng động cho 'cô nàng mùa hè'");
    })

    $("#collection2").click(function(){
        $("div.collection").css("color","white");
        $("ul.collection li a").css("color","white");
        $("ul.collection li").css("border-top","2px solid black")
        $(this).css("border-top","2px solid white")
        $("div.collection img").attr("src","img index/banner__collection2.webp");
        $("div.collection span").text("#COLOSSEUM #CURNONWATCH");
        $("div.collection h1").text("COLOSSEUM COLLECTION");
        $("div.collection p").text("Đại diện cho sự mạnh mẽ và phiêu lưu");
    })

    $("#collection3").click(function(){
        $("div.collection").css("color","black");
        $("ul.collection li a").css("color","black");
        $("ul.collection li").css("border-top","2px solid black")
        $(this).css("border-top","2px solid white")
        $("div.collection img").attr("src","img index/banner__collection3.webp");
        $("div.collection span").text("#HAMILTON #CURNONWATCH");
        $("div.collection h1").text("HAMILTON COLLECTION");
        $("div.collection p").text("Dòng đồng hồ nữ mặt vòm thanh lịch, hiện đại");
    })
})