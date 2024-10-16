
const burger = document.querySelector('.nav__burger')
const navMenu = document.querySelector('.nav__mobile')
const navBtn = document.querySelector('.nav__btn')
const thank = document.querySelector('.thank')
const main = document.querySelector('.main')

burger.addEventListener('click', () => {
   navMenu.classList.toggle('active')
   thank.classList.remove('active')

})
main.addEventListener('click', (e) => {
   e.stopPropagation()
   navMenu.classList.remove('active')
})

navBtn.addEventListener('click', () => {
   thank.classList.toggle('active')
   navMenu.classList.remove('active')
})
thank.addEventListener('click', (e) => {
   e.currentTarget.classList.remove('active')
})

$('.swiper-fade').slick({
   dots: true,
   infinite: true,
   dotsClass: 'slick-dots slider__dots',
   customPaging: function (slick, index) {
      var image = $(slick.$slides[index]).find('.slick-initialized .slider__item.slick-slide');
   },
   autoplay: true,
   autoplaySpeed: 3000,
   speed: 500,
   fade: true,
   cssEase: 'ease-in-out',
   arrows: false,

   responsive: [
      {
         breakpoint: 480,
         settings: {
            dots: false,
         }
      }
   ]
});


const city = document.querySelectorAll('[data-city]')
const card = document.querySelectorAll('[data-card]')

for (let item of city) {
   item.addEventListener('click', function () {

      for (let i of card) {
         if (this.dataset.city == i.dataset.card) {
            i.classList.remove('none')
         } else {
            i.classList.add('none')
         }
      }
   })

}
$('.qestion__slides').slick({
   slidesToShow: 3,
   arrows: true,
   prevArrow: $('.prev'),
   nextArrow: $('.next'),

   responsive: [
      {
         breakpoint: 1220,
         settings: {
            arrows: false,
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 821,
         settings: {
            arrows: false,
            slidesToShow: 1
         }
      }
   ]
});
