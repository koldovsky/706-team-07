(function (){
    const slides = [
      `<div class="carousel-slide">
        <div class="carousel-slide-wrapper">
          <img src="img/fistashka-teste.png" class="img-carousel-element-icecream-tastes d-block w-200"
          alt="Pistachio Ice cream ball">
          <p class="block-with-carousel-ice-cream-tastes__carousel-element_name-of-taste">Pistachio Heaven</p>
          <p class="block-with-carousel-ice-cream-tastes__carousel-element_taste-description">creamy nutty flavor</p>
          <p class="block-with-carousel-ice-cream-tastes__carousel-element_price-common-text">
          <span class="block-with-carousel-ice-cream-tastes__carousel-element_price-currecny-and-value">$5</span><span
            class="block-with-carousel-ice-cream-tastes__carousel-element_price-ball"> / ball</span>
          </p>
        </div>
      </div>`,
      `<div class="carousel-slide">
        <div class="carousel-slide-wrapper">
          <img src="img/strawberry-jeam.png" class="img-carousel-element-icecream-tastes d-block w-200"
            alt="Strawberry Ice cream ball">
          <p class="block-with-carousel-ice-cream-tastes__carousel-element_name-of-taste">Strawberry Gem</p>
          <p class="block-with-carousel-ice-cream-tastes__carousel-element_taste-description">fruity and fresh</p>
          <p class="block-with-carousel-ice-cream-tastes__carousel-element_price-common-text">
            <span class="block-with-carousel-ice-cream-tastes__carousel-element_price-currecny-and-value">$5</span>
            <span class="block-with-carousel-ice-cream-tastes__carousel-element_price-ball"> / ball</span>
          </p>
        </div>
      </div>`,
        `<div class="carousel-slide">
          <div class="carousel-slide-wrapper">
            <img src="img/coco-and-hazelnuts.png" class="img-carousel-element-icecream-tastes d-block w-200"
            alt="Brown Ice Cream ball">
            <p class="block-with-carousel-ice-cream-tastes__carousel-element_name-of-taste">Choco & Hazelnut</p>
            <p class="block-with-carousel-ice-cream-tastes__carousel-element_taste-description">rich sweet taste</p>
            <p class="block-with-carousel-ice-cream-tastes__carousel-element_price-common-text">
            <span class="block-with-carousel-ice-cream-tastes__carousel-element_price-currecny-and-value">$5</span><span
            class="block-with-carousel-ice-cream-tastes__carousel-element_price-ball"> / ball</span>
            </p>
          </div>
        </div>`,
      `<div class="carousel-slide">
        <div class="carousel-slide-wrapper">
          <img src="img/blue-ice-cream.png" class="img-carousel-element-icecream-tastes d-block w-200"
          alt="Blue Ice Cream ball">
          <p class="block-with-carousel-ice-cream-tastes__carousel-element_name-of-taste">Blue Paradise</p>
          <p class="block-with-carousel-ice-cream-tastes__carousel-element_taste-description">sour and fruity</p>
          <p class="block-with-carousel-ice-cream-tastes__carousel-element_price-common-text">
          <span class="block-with-carousel-ice-cream-tastes__carousel-element_price-currecny-and-value">$5</span><span
          class="block-with-carousel-ice-cream-tastes__carousel-element_price-ball"> / ball</span>
          </p>
        </div>  
      </div>`,
    `<div class="carousel-slide">
      <div class="carousel-slide-wrapper">
        <img src="img/mango-ice-cream.png" class="img-carousel-element-icecream-tastes d-block w-200"
        alt="Mango Ice Cream ball">
        <p class="block-with-carousel-ice-cream-tastes__carousel-element_name-of-taste">Mango Dreams</p>
        <p class="block-with-carousel-ice-cream-tastes__carousel-element_taste-description">classic tropic taste</p>
        <p class="block-with-carousel-ice-cream-tastes__carousel-element_price-common-text">
        <span class="block-with-carousel-ice-cream-tastes__carousel-element_price-currecny-and-value">$6</span><span
        class="block-with-carousel-ice-cream-tastes__carousel-element_price-ball"> / ball</span>
        </p>
        </div>
    </div>`];
  let currentSlideIdx = 0;
      function renderCarousel() {
        const slideContainer = document.querySelector('.carousel-block');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth >= 768){
          const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
          slideContainer.innerHTML += slides[secondSlideIdx];
          if (window.innerWidth >= 1024){
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
      }
      function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
      }

      function prevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderCarousel();
      }

      //setInterval(nextSlide, 5000);
      renderCarousel();

      const nextButton = document.querySelector('.carousel-control-next');
      nextButton.addEventListener('click', nextSlide);

      const prevButton = document.querySelector('.carousel-control-prev');
      prevButton.addEventListener('click', prevSlide);

      window.addEventListener('resize', renderCarousel);

})();