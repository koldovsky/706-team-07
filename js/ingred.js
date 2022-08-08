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

  setInterval(next, 1500);

  renderCarousel();

  /*      ingred section    END     */
})();

/* countdown clock  */

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1500);
}
let deadline = '2022-08-20'; // for this date
//let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);