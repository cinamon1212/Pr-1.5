const buttonClose = document.querySelector(".popup__button--close");
const buttonOpen = document.querySelector(".popup__button--open");

const hiddenItems = document.querySelectorAll(".popup__item-card--hidden");

const allSlide = document.querySelectorAll(".popup__item");
const swiperWrapper = document.querySelector(".popup__swiper-wrapper");

const boschItem = document.querySelector(".popup__item-card--bosch");
const lenItem = document.querySelector(".popup__item-card--lenovo");
const sonyItems = document.querySelectorAll(".popup__item-card--sony");

const iconDown = document.querySelector(".popup__icon--open");
const iconUp = document.querySelector(".popup__icon--close");

buttonOpen.addEventListener("click", function () {
  buttonOpen.classList.add("popup__button--hidden");
  iconDown.classList.add("popup__icon--hidden");

  buttonClose.classList.remove("popup__button--hidden");
  iconUp.classList.remove("popup__icon--hidden");

  for (let i = 0; i < hiddenItems.length; i++) {
    hiddenItems[i].classList.remove("popup__item-card--hidden");
  }

  for (let j = 0; j < sonyItems.length; j++) {
    sonyItems[j].classList.remove("popup__item-card--sony");
  }
});

buttonClose.addEventListener("click", function () {
  buttonOpen.classList.remove("popup__button--hidden");
  iconDown.classList.remove("popup__icon--hidden");

  buttonClose.classList.add("popup__button--hidden");
  iconUp.classList.add("popup__icon--hidden");

  for (let i = 0; i < hiddenItems.length; i++) {
    hiddenItems[i].classList.add("popup__item-card--hidden");
  }

  for (let j = 0; j < sonyItems.length; j++) {
    sonyItems[j].classList.add("popup__item-card--sony");
  }
});

const slider = document.querySelector(".popup__swiper-container");
const swiperNextItem = document.querySelectorAll(".popup__pointer-img");

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 570 && slider.dataset.mobile == "false") {
    for (let i = 0; i < sonyItems.length; i++) {
      sonyItems[i].remove();
    }
    for (let j = 0; j < swiperNextItem.length; j++) {
      swiperNextItem[j].classList.add("popup__button-pointer--next");
    }
    mySwiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: true,
      slideClass: "popup__item",
      wrapperClass: "popup__swiper-wrapper",
      pagination: {
        el: ".popup__swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".popup__button-pointer--next",
      },
    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 570) {
    for (let j = 0, i = 0; j < allSlide.length; j++) {
      if (allSlide[j] == boschItem) {
        swiperWrapper.insertBefore(sonyItems[i], boschItem);

        i++;
      }
      if (allSlide[j] == lenItem) {
        swiperWrapper.insertBefore(sonyItems[i], lenItem);
      }
    }

    slider.dataset.mobile = "false";

    if (slider.classList.contains("popup__swiper-container-initialized")) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();
window.addEventListener("resize", () => {
  mobileSlider();
});
