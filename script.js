const carousel = document.querySelector('.carousel')
let width = carousel.getBoundingClientRect().width;
const backBtn = document.querySelector('#next')
const nextBtn = document.querySelector('#back')
function saga() {
    carousel.style.scrollBehavior = 'smooth'
    carousel.scrollLeft += 420;

}

nextBtn.addEventListener('click', saga);

function sola() {

    carousel.style.scrollBehavior = 'smooth'
    carousel.scrollLeft -= 420;

}

backBtn.addEventListener('click', sola);

var genislik = window.innerWidth
console.log(genislik)