import "./styles.css";
document.getElementById("slider").innerHTML = `
<div class="container">
<div class="showSlider fade">
  <img src="img/i1.jpg" alt="" />
  <div class="contentBook">image4</div>
</div>
<div class="showSlider fade">
  <img src="img/i2.jpg" alt="" />
  <div class="contentBook">image4</div>
</div>
<div class="showSlider fade">
  <img src="img/i3.jpg" alt="" />
  <div class="contentBook">image4</div>
</div>
<div class="showSlider fade">
  <img src="img/i4.jpg" alt="" />
  <div class="contentBook">image4</div>
</div>
<div>
<a class="left" onclick='nextSlide(-1)'>❮</a>
<a class="right" onclick="nextSlide(1)">❯</a>
</div>
</div>
`;
var slide_index = 1;
slidesDisplay(slide_index);
function nextSlide(n) {
  slidesDisplay((slide_index += n));
}
function currentSlide(n) {
  slidesDisplay((slide_index = n));
}
function slidesDisplay(n) {
  var i;
  var slides = document.getElementsByClassName("showSlider");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}
