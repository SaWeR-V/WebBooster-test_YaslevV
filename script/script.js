const accToggles = document.querySelectorAll('.accordion-header-block');

accToggles.forEach(elem => {
    elem.onclick = () => {
        let alreadyOpened = document.querySelector('.accordion-active');

        if (alreadyOpened) {
            alreadyOpened.closest('.accordion-item').querySelector('.accordion-content').classList.add('hidden');
            alreadyOpened.classList.remove('accordion-active');
        }

        elem.closest('.accordion-item').querySelector('.accordion-content').classList.remove('hidden');
        elem.classList.add('accordion-active')
    }
})

const nav = document.querySelector('.header-nav');
const footer = document.querySelector('.footer-wrapper');
const windowHeight = window.innerHeight;

window.addEventListener('scroll', () => {
    const footerTop = footer.getBoundingClientRect().top;

    if (window.scrollY >= 5) {
        nav.classList.add('header-nav-scrolled')
    }
    else if (window.scrollY <= 5) {
        nav.classList.remove('header-nav-scrolled')
    }
    if (footerTop < windowHeight) {
        nav.style.transform = 'translateY(-100%)';
    }
    else {
        nav.style.transform = 'translateY(0)';
    }
})

const burger = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');

burger.onclick = () => {
    burger.classList.toggle('burger-btn-opened');

    burger.classList.contains('burger-btn-opened') ? burgerMenu.style.display = 'flex' : burgerMenu.style.display = 'none';
}