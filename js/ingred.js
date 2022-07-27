/*           ingred_section  Start         */
(function () {
    const ingdedSlides = [

    `<div class="ingred-icon">
      <img src="img/collage.png" alt="ice-cream-berry">
    </div>`,
    `<div class="ingred-icon">
      <img src="img/ice-cream-in-waffle.png" alt="ice-cream-waffle">
    </div>`,
    `<div class="ingred-icon">
      <img src="img/desert9.png" alt="desert">
    </div>`,
    `<div class="ingred-icon">
      <img src="img/strawberry-jeam.png" alt="strawberry-jeam">
    </div>`

    ];

    let currentSlideIdx = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.ingred__slides');
        slideContainer.innerHTML = ingdedSlides[currentSlideIdx];


    }
    function next() {
        currentSlideIdx = currentSlideIdx + 1 >= ingdedSlides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }

    setInterval(next, 500);

    renderCarousel();

    /*      ingred section    END     */

    





})();