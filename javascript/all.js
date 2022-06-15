// Script pour scale les images
var modal = document.getElementById("imgModal");
var image = document.querySelectorAll(".imgClick");
var modalImage = document.querySelector(".modalContent");

image.forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImage.src = this.src;

    modal.addEventListener("click", function (e) {
      if (e.target !== modalImage) {
        modal.style.display = "none";
      }
    });
  });
});

function closeImg() {
  modal.style.display = "none";
}

// Toutes les animations Croll into view
var imgScroll = document.querySelectorAll(".imgScroll");
var rowImg = document.querySelectorAll(".section-4 > .row");
var slideButton = document.querySelectorAll(".slideBtn");
var videoOpacity = document.querySelectorAll(".video-opacity");
var imgSlideTop = document.querySelectorAll(".img-slide-top");


window.addEventListener("scroll", function () {
  imgScroll.forEach((imgView) => {
    var positionImg = imgView.getBoundingClientRect();

    if (
      positionImg.top >= 0 &&
      positionImg.bottom <= window.innerHeight * 1.2
    ) {
      imgView.style.cssText = "opacity:1;padding-top:0px;transition:all 1s";
    }
  });

  slideButton.forEach((btnView) => {
    var positionBtnSlide = btnView.getBoundingClientRect();

    if (
      positionBtnSlide.top >= 0 &&
      positionBtnSlide.bottom <= window.innerHeight
    ) {
      btnView.style.cssText =
        "opacity: 1;transition: left 1s, opacity 1s;left: 0px;";
    }
  });

  videoOpacity.forEach((video) => {
    var positionVideo = video.getBoundingClientRect();

    if (
      positionVideo.top >= 0 &&
      positionVideo.bottom <= window.innerHeight * 1.2
    ) {
      video.style.cssText = "opacity:1; transition:all 1s";
    }
  });

  imgSlideTop.forEach((imgSlide) => {
    var positionImageSlide = imgSlide.getBoundingClientRect();

    if (
      positionImageSlide.top >= 0 &&
      positionImageSlide.bottom <= window.innerHeight * 1.2
    ) {
      imgSlide.style.cssText = "opacity: 1; top: 0px; transition: all 1s";
    }
  });
});



