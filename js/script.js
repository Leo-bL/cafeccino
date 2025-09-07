// start modal
function openModal(id) {
    const modal = document.getElementById(id);
    const content = modal.querySelector('div');
    modal.classList.remove('hidden');
    content.classList.remove('animate-fade-out');
    content.classList.add('animate-fade-in');
}
function closeModal(id) {
    const modal = document.getElementById(id);
    const content = modal.querySelector('div');
    content.classList.remove('animate-fade-in');
    content.classList.add('animate-fade-out');
    setTimeout(() => {
    modal.classList.add('hidden');
    }, 300);
}
const sign_up = document.getElementById('sign-up');
const sign_in = document.getElementById('sign-in');
const sign_up_filed = document.getElementById('sign-up-filed');
const sign_in_filed = document.getElementById('sign-in-filed');
// start sign up
sign_up.onclick = function(){
    sign_in.classList.remove('bg-mywhite');
    sign_in.classList.remove('text-myblack');
    sign_up.classList.add('bg-mywhite');
    sign_up.classList.add('text-myblack');

    sign_in_filed.classList.add('opacity-0');
    setTimeout(() => {
        sign_in_filed.classList.add('hidden');
        sign_up_filed.classList.remove('hidden');
    setTimeout(() => {
        sign_up_filed.classList.remove('opacity-0');
    }, 50);
    }, 500);
}
// end sign up
// start sign in
sign_in.onclick = function(){
    sign_up.classList.remove('bg-mywhite');
    sign_up.classList.remove('text-myblack');
    sign_in.classList.add('bg-mywhite');
    sign_in.classList.add('text-myblack');

    sign_up_filed.classList.add('opacity-0');
    setTimeout(() => {
        sign_up_filed.classList.add('hidden');
        sign_in_filed.classList.remove('hidden');
    setTimeout(() => {
        sign_in_filed.classList.remove('opacity-0');
    }, 50);
    }, 500);
}
// end sign in
// end modal
// start swaper librry
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const swiperContainer = document.querySelector('.swiper');

swiperContainer.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
});

swiperContainer.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
});
// end swaper librry
let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        navbar.style.translate = " 0 -125%";
    } else {
        navbar.style.translate = "0 0";
    }
    lastScrollY = window.scrollY;
});
// start loding
const loading = document.getElementById('loading-screen');
const body = document.getElementById('body')
window.onload = function () {
    loading.classList.add('opacity-0');
    setTimeout(() => {
        loading.classList.add('hidden');
        body.style.overflow = `auto`
    }, 500);
}
    
// end loading 
const btn_menu = document.getElementById('b-menu');
const bars = document.querySelectorAll('.bar')
const the_menu = document.querySelector('.the-menu');
const links = document.querySelectorAll('.link');
btn_menu.onclick = function(){
    bars[0].classList.toggle('translate-y-[150%]');
    bars[1].classList.toggle('-translate-y-[150%]');
    bars[0].classList.toggle('rotate-45');
    bars[1].classList.toggle('-rotate-45');
    the_menu.classList.toggle('mt-[100%]');
    setTimeout(() => {
        the_menu.classList.toggle('h-[600%]');
        
    }, 200);
    setTimeout(() => {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.toggle('hidden')
            setTimeout(() => {
                links[i].classList.toggle('opacity-100');
            }, i * 100);
        }
    }, 200);
    
}
for (let i = 0; i < links.length; i++) {
    links[i].onclick = () => btn_menu.click();
    
}
let indexia = 0;
const caption = document.getElementById('caption');
let caption_array = ['A cup, a moment, a life.',' is the first of all','it`s the best part of waking up ']
setInterval(() => {
    caption.classList.add('opacity-0');
    caption.classList.add('translate-y-[150%]');
    caption.classList.remove('text-mybrawon');
    caption.classList.add('text-myblack');
    setTimeout(() => {
        caption.innerHTML = caption_array[indexia]
    indexia++;
    if (indexia > caption_array.length-1) {
        indexia = 0;
    }
        caption.classList.remove('opacity-0');
    caption.classList.remove('translate-y-[150%]');
    }, 500);
}, 4000);
