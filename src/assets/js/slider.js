var slideIndex = 1;
ShowSlides(slideIndex);

// Next/previous controls
export function PlusSlides(n) {
  ShowSlides(slideIndex += n);
}

// Thumbnail image controls
export function CurrentSlide(n) {
    console.log('Current slide' + n);
    ShowSlides(slideIndex = n);
}

export function ShowSlides(n) {
  console.log("showSlide " + n);
  var i;
  var slides = document.getElementsByClassName('mySlides');
  console.log("no of slides " + slides.length);
    if (slides.length <= 0) {
        return;
    }
  var dots = document.getElementsByClassName('demo');
  var captionText = document.getElementById('caption');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    console.log("showSlide " + n);
}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  console.log("showSlide " + n);

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}