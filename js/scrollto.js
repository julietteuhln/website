
window.onload=function(){
    var swiper = new Swiper('.swiper-container', {
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 'auto',
      spaceBetween: 30,
      mousewheel: true,
      clickable: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'progressbar',
      },

    });

    $("#mygallery").justifiedGallery({
    randomize: true,
    lastRow: 'justify',
    rowHeight : 400,
    margin: 5,

    }); 

    $(document).ready(function(){
    $('#article').click(function(){
        $('.article1').slideDown(2000);
    });
    $('#retour').click(function(){
        $('.article1').SlideUp(2000);
    });
    });

     $(document).ready(function(){
    $('#article2').click(function(){
        $('.article2').show();
    });
    $('#retour').click(function(){
        $('.article2').hide();
    });
    });

      $(document).ready(function(){
    $('#article3').click(function(){
        $('.article3').show();
    });
    $('#retour').click(function(){
        $('.article3').hide();
    });
    });

    $(document).ready(function(){
    $('#article4').click(function(){
        $('.article4').show();
    });
    $('#retour').click(function(){
        $('.article4').hide();
    });
    });
     $(document).ready(function(){
    $('#article5').click(function(){
        $('.article5').show();
    });
    $('#retour').click(function(){
        $('.article5').hide();
    });
    });


}

