import Swiper, {Pagination} from 'swiper';

const slider = ()=> {
    Swiper.use([Pagination]);

    const bgSwiper = new Swiper('.bg-swiper',{
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
    });
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        controller:{
            control: bgSwiper
        }
    });
    swiper.on( 'slideChange', function() {
        bgSwiper.slideTo(swiper.activeIndex)

    });
}

export default slider

