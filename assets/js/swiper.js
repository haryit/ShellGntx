
  $(document).ready(function() {
    // Sembunyikan loading indicator
    $("#mantanku").hide();
    
    // Tampilkan elemen yang semula tersembunyi
    $("#fenyku").show();
      const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2500,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
});
