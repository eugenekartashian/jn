$(document).ready(function(){
	$('.gallery_content').createDiagonalSlider();
});

$('.report__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    prevArrow: '<div class="prev"><img src="./images/arrow-left.png"></div>',
    nextArrow: '<div class="next"><img src="./images/arrow-right.png"></div>',
    responsive: [
        {
            breakpoint: 1187,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 861,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 561,
            settings: {
                slidesToShow: 1
            }
        }

    ]
});

$('.clients__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
    // prevArrow: '<div class="prev-2"><img src="./images/arrow-left-2.png"></div>',
    // nextArrow: '<div class="next-2"><img src="./images/arrow-right-2.png"></div>',
    responsive: [
        {
            breakpoint: 861,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 561,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
