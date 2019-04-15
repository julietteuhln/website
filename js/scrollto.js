
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

}

