
const methods = {
    init(){
        methods.slickCounter();
        methods.slickGallery();
        methods.slickGoto();
    },
    slickCounter(){
        let currentSlide;
        let slidesTotal;

        const updateSliderCounter = (slick,currentIndex) => {
            currentSlide = slick.slickCurrentSlide() +1;
            slidesTotal = slick.slideCount;
            $('.collectionIndex').text('0'+currentSlide);
            $('.collectionTotal').text('0'+slidesTotal);
        }
        $('.portfolio__collection--main-block').on('init',function(event,slick){
            updateSliderCounter(slick);
        });
        $('.portfolio__collection--main-block').on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });
    },
    slickGallery(){
        $('.portfolio__navfor--images-list').slick({
            vertical:true,
            centerMode:true,
            centerPadding: '196px',
            slideToShow:3,
            slideToScroll:1,
            verticalSwiping:true,
            arrows:true,
            prevArrow:'.arrow-prev',
            nextArrow:'.arrow-next',
            asNavFor:'.portfolio__collection--main-block',
        });
        $('.portfolio__collection--main-block').slick({
            slideToShow:1,
            slideToScroll:1,
            dots:true,
            asNavFor:'.portfolio__navfor--images-list',
            arrows:false,
        });
    },
    slickGoto(){
        $('.portfolio__navfor--images-list').on('click', '.slick-slide', function(event) {
            event.preventDefault();
            var goToSingleSlide = $(this).data('slick-index');
        
            $('.portfolio__collection--main-block').slick('slickGoTo', goToSingleSlide);
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    methods.init();
})