let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("carousel")[0].getElementsByTagName("img");
  if (n >= slides.length) { slideIndex = 0; }  // Revenir à la première image
  if (n < 0) { slideIndex = slides.length - 1; }  // Aller à la dernière image si on recule depuis la première
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }
  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.add("active");
}
