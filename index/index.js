const prev = document.querySelector('.btn-prev'),
      next = document.querySelector('.btn-next'),
      slides = document.querySelectorAll('.slide');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const nextSlide = () => {
    if(index === slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
};
