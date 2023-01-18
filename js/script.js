let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.hamberger-in-nav');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function () {
    mobileNav.classList.add('open');
    hamberger.classList.add('d-none');
});
times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    hamberger.classList.remove('d-none');
});
let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');
let btn3 = document.querySelector('.btn-3');
let slide1 = document.querySelector('.slide-1');
let slide2 = document.querySelector('.slide-2');
let slide3 = document.querySelector('.slide-3');


slide1.addEventListener('click', function () {
   slide1.classList.add("translate-0");
   slide1.classList.remove("translate--100");
   slide1.classList.remove("translate--200");
   slide2.classList.add("translate-100");
   slide2.classList.remove("translate--100");
   slide3.classList.add("translate-150");
});
btn1.addEventListener('click', function () {
   slide1.classList.add("translate-0");
   slide1.classList.remove("translate--100");
   slide1.classList.remove("translate--200");
   slide2.classList.add("translate-100");
   slide2.classList.remove("translate--100");
   slide3.classList.add("translate-150");
});
slide2.addEventListener('click', function () {
   slide1.classList.add("translate--100");
   slide1.classList.remove("translate-0");
   slide1.classList.remove("translate--200");
   slide2.classList.add("translate-0");
   slide2.classList.remove("translate-100");
   slide2.classList.remove("translate--100");
   slide3.classList.add("translate-100");
   slide3.classList.remove("translate-200");
   slide3.classList.remove("translate--100");
   slide3.classList.remove("translate-150");
});
btn2.addEventListener('click', function () {
   slide1.classList.add("translate--100");
   slide1.classList.remove("translate-0");
   slide1.classList.remove("translate--200");
   slide2.classList.add("translate-0");
   slide2.classList.remove("translate-100");
   slide2.classList.remove("translate--100");
   slide3.classList.add("translate-100");
   slide3.classList.remove("translate-200");
   slide3.classList.remove("translate--100");
   slide3.classList.remove("translate-150");
});
slide3.addEventListener('click', function () {
   slide1.classList.add("translate--200");
   slide2.classList.add("translate--100");
   slide3.classList.add("translate-0");
   slide3.classList.remove("translate-100");
   slide3.classList.remove("translate-200");
   slide3.classList.remove("translate--100");
   slide3.classList.remove("translate-150");
   
});
btn3.addEventListener('click', function () {
   slide1.classList.add("translate--200");
   slide2.classList.add("translate--100");
   slide3.classList.add("translate-0");
   slide3.classList.remove("translate-100");
   slide3.classList.remove("translate-200");
   slide3.classList.remove("translate--100");
   slide3.classList.remove("translate-150");
   
});