
(function() {
 let interval;
 const eventDay = new Date('01/08/2022');  
 const second = 1000;
 const minute = second * 60;
 const hour = minute * 60;
 const day = hour * 24;
 const countDownFn = () => {
    everySecond = setInterval(countDownFn, second);
    everyMinute = setInterval(countDownFn, minute);
    everyHour = setInterval(countDownFn, hour);
    let now = new Date();
    let timeSpan = eventDay - now;
    if (timeSpan <= -today) {
        console.log("Unfortunately we have past the event day");
        clearInterval(interval);
    } else if (timeSpan <= 0) {
        console.log("Today is the event day");
        clearInterval(interval);
        return;
    } else {
        const days = Math.floor(timeSpan / day);
        const hours = Math.floor((timeSpan % day) / hour);
        const minutes = Math.floor((timeSpan % hour) / minute);
        const seconds = Math.floor((timeSpan % minute) / second);
    console.log(days + ":" + hours + ":" + minutes + ":" + seconds);
    }
 }
})();
