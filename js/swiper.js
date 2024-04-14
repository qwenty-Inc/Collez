const swiper = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.next1',
        prevEl: '.prev1',
    },
    breakpoints: {
        1300: {
            slidesPerView: 4,
            spaceBetween: 16,
        }
    }
});

const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.next2',
        prevEl: '.prev2',
    },
    breakpoints: {
        1300: {
            slidesPerView: 4,
            spaceBetween: 16,
        }
    }
});

const swiper3 = new Swiper('.swiper3', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.next3',
        prevEl: '.prev3',
    },
    breakpoints: {
        1300: {
            slidesPerView: 3,
            spaceBetween: 16,
        }
    }
});

const swiperAbout = new Swiper('.swiper-about', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    navigation: {
        nextEl: '.next1',
        prevEl: '.prev1',
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    }
});