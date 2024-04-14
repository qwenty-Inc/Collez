(function (){
    const button = document.querySelector('.menu');
    const nav = document.querySelector('.header__sub');

    button.onclick=function () {
        console.log('ss')
        button.classList.toggle('active');
        nav.classList.toggle('active');
    }
})();