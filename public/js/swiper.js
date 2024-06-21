if (document.querySelector('.swiper1')) {
    const swiper = new Swiper('.swiper1', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 16,

        navigation: {
            nextEl: '.next1',
            prevEl: '.prev1',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
}
