
class CountdownTimer {
  constructor(targetDate) {
   

    const x = setInterval(function () {
            var now = new Date().getTime();

     
      var time = targetDate.targetDate - now;

      function pad(value){
        return String(value).padStart(2, '0');
    }
      var days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      var hours = pad(Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ));
      var minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      var seconds = pad(Math.floor((time % (1000 * 60)) / 1000));
const clock = {
    days:document.querySelector('[data-value="days"]'),
    hours:document.querySelector('[data-value="hours"]'),
    minutes:document.querySelector('[data-value="mins"]'),
    seconds:document.querySelector('[data-value="secs"]'),
};
console.log(clock.days);
clock.days.innerHTML = days;
clock.hours.innerHTML = hours;
clock.minutes.innerHTML = minutes;
clock.seconds.innerHTML = seconds;
      
      if (time < 0) {
        clearInterval(x);
        document.getElementById("timer-1").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});
