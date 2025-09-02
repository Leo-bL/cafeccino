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
const beans = document.getElementById('beans');
window.onload = function () {
    setTimeout(() => {
        beans.classList.remove('animation-open-up');
    }, 1500);
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
