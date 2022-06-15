gsap.registerPlugin(TextPlugin);

const btnAccueil = document.getElementsByClassName("btn-accueil");
const textAccueil = document.getElementsByClassName("text-accueil");
const imgAccueil = document.getElementsByClassName("img-accueil");
var bodyBg = document.getElementsByClassName("body-background");

const tl = new TimelineMax();

tl.fromTo(bodyBg, 1.5, { scale: 10 }, { scale: 1, ease: Power4.easeOut })
  .fromTo(btnAccueil, 1, { y: 300, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo(imgAccueil, 1, { opacity: 0 }, { opacity: 1 }, "-=0.6")
  .fromTo(
    textAccueil,
    1.5,
    { opacity: 0, yPercent: 100 },
    { opacity: 1, yPercent: 0 },
    "-=0.5"
  );

var modal = document.getElementById("imgModal");
var image = document.querySelectorAll(".imgClick");
var modalAccueilImage = document.querySelector(".modalAccueilImage");

image.forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "flex";
    modalAccueilImage.src = this.src;

    modal.addEventListener("click", function (e) {
      if (e.target !== modalAccueilImage) {
        modal.style.display = "none";
      }
    });
  });
});

function closeImg() {
  modal.style.display = "none";
}
