// 메뉴 클릭시, 하단 메뉴 배경이 생긴다.
const ul = document.querySelector(".menu > ul");
const bg = document.querySelector(".menu .bg");

ul.addEventListener("mouseover",()=>{ bg.classList.remove("hide");});
ul.addEventListener("mouseleave",()=>{ bg.classList.add("hide");});  // mouseleave 자식 영역에 들어가 요소를 빠져나가도 감지하지 않음, mouseout 요소 안에 다른 요소를 빠져나가도 감지함.


// -----------------------------------------------------------------------------------------------
// fiexed_menu_icon 클릭시, 해당 메뉴가 왼쪽으로 사라지고, 상세메뉴 fixed_menu 가 나타남.
// const fixed_menu_icon = document.querySelector(".fixed_menu_icon");
// const fixed_menu = document.querySelector(".fixed_menu");

// fixed_menu_icon.addEventListener("mouseover",() => {
//   fixed_menu_icon.classList.add("opacity0");
//   fixed_menu_icon.classList.add("translate-X");

//   fixed_menu.classList.remove("opacity0");
//   fixed_menu.classList.add("translateX");
// });

// fixed_menu.addEventListener("mouseleave",() => {
//   fixed_menu_icon.classList.remove("opacity0");
//   fixed_menu_icon.classList.remove("translate-X");

//   fixed_menu.classList.remove("translateX");
//   fixed_menu.classList.add("opacity0");
// });

// -----------------------------------------------------------------------------------------------
// swiper start 

var swiper0 = new Swiper('.top_bg', {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
});


// var swiper1 = new Swiper('.first', {
//     spaceBetween: 30,
//     centeredSlides: true,
//     loop: true,
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

var swiper2 = new Swiper('.second', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    // loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper3 = new Swiper('.third', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    // loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

  var swiper4 = new Swiper('.fourth', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    // loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
