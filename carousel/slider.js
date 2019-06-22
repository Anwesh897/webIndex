var slideIndex = 1;
showsSlides(slideIndex);
function plusSlides(n){
    showsSlides(slideIndex += n);
}
function currentSlide(n){
    showsSlides(slideIndex = n);
}
function showsSlides(n){
    var i;
    var slides = document.getElementsByClassName('myslides');
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display='block';
}