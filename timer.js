class CountdownTimer {
  constructor(selector) {
    this.selector = selector.selector;
    this.targetDate = selector.targetDate;
    this.daysSpan = document.querySelector('[data-value="days"]');
    this.hoursSpan = document.querySelector('[data-value="hours"]');
    this.minutesSpan = document.querySelector('[data-value="mins"]');
    this.secondsSpan = document.querySelector('[data-value="secs"]');
    console.log(this.daysSpan);
    this.updateClock = this.updateClock.bind(this);
    const x = setInterval(this.updateClock, 1000);
  }
   pad(value) {
    return String(value).padStart(2, "0");
  }
  updateClock() {
    var now = new Date().getTime();
this.createSpan(now);
  }
  createSpan(now) {
    this.time = this.targetDate - now;
    const days = this.pad(Math.floor(this.time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutes = this.pad(
      Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = this.pad(Math.floor((this.time % (1000 * 60)) / 1000));

    
    this.daysSpan.innerHTML = days;
    this.hoursSpan.innerHTML = hours;
    this.minutesSpan.innerHTML = minutes;
    this.secondsSpan.innerHTML = seconds;
    console.log(this.daysSpan);
  
    if (this.time < 0) {
      clearInterval(x);
      document.getElementById(this.selector).innerHTML = "EXPIRED";
    }
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});
