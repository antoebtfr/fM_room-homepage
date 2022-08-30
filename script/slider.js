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
        const slides = $('.slide');
        this.slideLimitTester();
        slides.hide();
        slides.filter('#slide-' + this.activeSlide).show();
        $('#top-right-section').attr('class', 'active-slide-' + this.activeSlide);
        this.changeBackgroundImage();
    }

    slideLimitTester(){
        this.activeSlide <= 0 ? this.activeSlide = this.slideNumber : '';
        this.activeSlide > this.slideNumber ? this.activeSlide = 1 : '';
    }

    changeBackgroundImage(){
        const imageBank = [
            {id: 1, image: 'desktop-image-here-1', ext: 'jpg'},
            {id: 2, image: 'desktop-image-here-2', ext: 'jpg'},
            {id: 3, image: 'desktop-image-here-3', ext: 'jpg'}
        ] 

        console.log(imageBank.filter( x => x.id = this.activeSlide)); 


    }
}