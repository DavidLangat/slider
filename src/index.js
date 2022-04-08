import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
document.getElementById("slider").innerHTML = `
<div class="container">
<div class="showSlider fade">
  <img src="img/i1.jpg" alt="Entering Library" />
  <div class="contentBook">Enter into Library</div>
</div>
<div class="showSlider fade">
  <img src="img/i2.jpg" alt="Select Book" />
  <div class="contentBook">Select your book</div>
</div>
<div class="showSlider fade">
  <img src="img/i3.jpg" alt="Registering ID" />
  <div class="contentBook">Register your Library ID</div>
</div>
<div class="showSlider fade">
  <img src="img/i4.jpg" alt="Returning Book" />
  <div class="contentBook">Return your book after 7 days</div>
</div>
<a class="left" onclick="nextSlide(-1)">❮</a>
<a class="right" onclick="nextSlide(1)">❯</a>
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
