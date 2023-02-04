//! Home sidebar start
const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const btnCloseSidebar = document.querySelector("#close-sidebar");
btnOpenSidebar.addEventListener("click", function () {
  sidebar.style.left = "0";
});

btnCloseSidebar.addEventListener("click", function () {
  sidebar.style.left = "-100%";
});

//click outside start
document.addEventListener("click", function () {
  if (
    !event.composedPath().includes(sidebar) &&
    !event.composedPath().includes(btnOpenSidebar)
  ) {
    sidebar.style.left = "-100%";
  }
});

//click outside end
//! Home sidebar end

//! Search modal start

const btnOpenToggle = document.querySelector(".toggle-button");
const btnCloseToggle = document.getElementById("close-search");
const modalSearch = document.getElementsByClassName("modal-search");

btnOpenToggle.addEventListener("click", function () {
  modalSearch[0].style.visibility = "visible";
  modalSearch[0].style.opacity = "1";
});

btnCloseToggle.addEventListener("click", function () {
  modalSearch[0].style.visibility = "hidden";
  modalSearch[0].style.opacity = "0";
});

//click outside start
document.addEventListener("click", function (e) {
  if (
    !e.composedPath().includes(modalSearch[0]) &&
    !e.composedPath().includes(btnOpenToggle)
  ) {
    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacity = "0";
  }
});

//click outside end

//! Search modal end

//?--------------------

//! Slider start

let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
  showSlides((slideIndex += 1));
}, 4000);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slider-item");
  const dots = document.getElementsByClassName("slider-dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

//! Slider end
