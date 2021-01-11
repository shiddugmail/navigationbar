let slideIndex = 1;

export function PlusSlides(e) {
  e.preventDefault();
  let n = e.target.attributes.getNamedItem("value").value;
  console.log('Slide Index: ' + slideIndex);
  ShowSlides(slideIndex += parseInt(n));
}

// Thumbnail image controls
export function CurrentSlide(e) {
  e.preventDefault();
  let n = e.target.attributes.getNamedItem("value").value;
  console.log('Current slide: ' + n);
  ShowSlides(n);
}

export function ShowSlides(n) {
  slideIndex = parseInt(n);
  console.log("showSlide: " + n);
  var i;
  var slides = document.getElementsByClassName('mySlides');
  console.log("no of slides " + slides.length);
  if (slides.length <= 0) {
    return;
  }
  var dots = document.getElementsByClassName('demo');
  var captionText = document.getElementById('caption');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    console.log("Active slide " + i);
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
