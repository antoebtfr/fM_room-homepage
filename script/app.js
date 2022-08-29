const carouselSlideStart = () => {
    const slides = $('.slide');
    $('#top-right-section').addClass('active-slide-1');
    slides.hide();
    slides.first().show();
}

carouselSlideStart();