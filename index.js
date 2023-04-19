$(document).ready(function(){
    $('#collection__list__1').click(function(){
        $('div.collection').css('background-image','url("img index/banner_new.webp")')
        $('div.collection span').css('color','black')
        $('.btn__hot').css('color','black')
        $('.btn__hot').css('border-color','black')
        $('.collection__list a').css('color','black')
        //text
        $('.collection__span__1').text('#Curnonwatch #GFORKS')
        $('.collection__span__2').text('G-FORKS COLLECTION')
        $('.collection__span__3').text('Cảm hứng từ PILOT WATCH - mạnh mẽ, cá tính')
        //border-top
        $('ul.collection__list li').removeClass('active');
        $(this).addClass('active');
    })
    $('#collection__list__2').click(function(){
        $('.collection').css('background-image','url("img index/banner__collection2.webp")')
        $('.collection span').css('color','white')
        $('.btn__hot').css('border-color','white')
        $('.btn__hot').css('color','white')
        $('.collection__list a').css('color','white')
        //text
        $('.collection__span__1').text('#COLOSSEUM #CURNONWATCH')
        $('.collection__span__2').text('COLOSSEUM COLLECTION')
        $('.collection__span__3').text('Đại diện cho sự mạnh mẽ và phiêu lưu')
        //border-top
        $('ul.collection__list li').removeClass('active');
        $(this).addClass('active');
    })
    $('#collection__list__3').click(function(){
        $('div.collection').css('background-image','url("img index/banner__collection3.webp")')
        $('div.collection span').css('color','black')
        $('.btn__hot').css('color','black')
        $('.btn__hot').css('border-color','black')
        $('.collection__list a').css('color','black')
        //text
        $('.collection__span__1').text('#HAMILTON #CURNONWATCH')
        $('.collection__span__2').text('HAMILTON COLLECTION')
        $('.collection__span__3').text('Dòng đồng hồ nữ mặt vòm thanh lịch, hiện đạ')
        //border-top
        $('ul.collection__list li').removeClass('active');
        $(this).addClass('active');
    })
})
