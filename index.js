// https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n)  {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// tekstislaididele sama asi

let textSlideIndex = 1;
showTextSlides(textSlideIndex);

function plusTextSlides(n) {
    showTextSlides(textSlideIndex += n)
}

function currentTetxSlide(n) {
    showTextSlides(textSlideIndex = n)
}

function showTextSlides(n)  {
    let i;
    let textSlides = document.getElementsByClassName("right");
    if (n > textSlides.length) {textSlideIndex = 1}
    if (n < 1) {textSlideIndex = textSlides.length}
    for (i = 0; i < textSlides.length; i++) {
        textSlides[i].style.display = "none";
    }
    textSlides[textSlideIndex-1].style.display = "block";
}