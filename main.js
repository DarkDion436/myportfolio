/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.querySelector('.header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', () => {
    scrollHeader()
    scrollActive()
    scrollUp()
});


/*=============== SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400){
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
    },
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__title, .home__subtitle`)
sr.reveal(`.home__description, .home__buttons`, {delay: 500, origin: 'bottom'})
sr.reveal(`.home__scroll`, {delay: 700, origin: 'bottom'})

sr.reveal(`.about__data`, {origin: 'bottom'})

sr.reveal(`.section__title, .skills__intro`, {origin: 'top'})
sr.reveal(`.skills__card`, {interval: 100, origin: 'bottom'})

sr.reveal(`.projects__intro, .projects__button-container`, {origin: 'top'})
sr.reveal(`.projects__card`, {interval: 100, origin: 'bottom'})

sr.reveal(`.testimonial .section__title, .testimonial__intro`, {origin: 'top'})
sr.reveal(`.testimonial__card`, {interval: 100, origin: 'bottom'})

sr.reveal(`.contact-header, .cta__container`, {origin: 'top'})
sr.reveal(`.contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.footer__container`, {origin: 'bottom', interval: 100})

sr.reveal(`.about-company__image`, {origin: 'left'})
sr.reveal(`.about-company__data`, {origin: 'right'})
sr.reveal(`.expertise__header`, {origin: 'top'})
sr.reveal(`.skills__data, .expertise__stat`, {interval: 100, origin: 'bottom'})