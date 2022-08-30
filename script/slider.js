export default class Slider {

    constructor(){
        this.activeSlide = 0;
        this.slideNumber = 0;
    }

     async carouselSlideStart() {
        const slides = $('.slide');
        this.slideNumber = slides.length;
        slides.hide();
        slides.first().show();
        this.activeSlide = 1;
        $('#top-right-section').addClass('active-slide-' + this.activeSlide);
    
        $('#btn-angle-previous').click(this.previousSlide);
        $('#btn-angle-next').click(this.nextSlide);
     }
 
    previousSlide = () => {
        this.activeSlide --;
        this.changeSlide();
    }
    
    nextSlide = () => {
        this.activeSlide ++;
        this.changeSlide();
    }

    changeSlide = () => {
        this.slideLimitTester();
        $('#top-right-section').attr('class', 'active-slide-' + this.activeSlide);
    }

    slideLimitTester(){
        this.activeSlide <= 0 ? this.activeSlide = this.slideNumber : '';
        this.activeSlide > this.slideNumber ? this.activeSlide = 1 : '';
    }
}