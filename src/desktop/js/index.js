
const methods = {
    init(){
        methods.slickGallery();
    },
    slickGallery(){
        $('.portfolio__navfor--images-list').slick({
            vertical:true,
            slideToShow:3,
            slideToScroll:1,
            arrows:true,
            asNavFor:'.portfolio__collection--main-block',
        });
        $('.portfolio__collection--main-block').slick({
            slideToShow:1,
            slideToScroll:1,
            dots:true,
            asNavFor:'.portfolio__navfor--images-list',
            arrows:false,
        });
    }
}

// $(document).load( function() {
//     console.log('dadasdas');
//     methods.init();
// });


document.addEventListener("DOMContentLoaded", function () {
    methods.init();
})