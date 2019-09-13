
class Clock {

  constructor() {
    let now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
    setInterval(this._tick.bind(this), 1000); // <- does not invoke the function, only passes it in as the callback function as an argument for setInterval
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.seconds++;
   if(this.seconds === 60) {
     this.seconds = 0; 
     this.minutes++;
    if(this.minutes === 60) {
      this.minutes = 0;
      this.hours++; 
      if(this.hours === 24) {
        this.hours = 0; 
      }
    }
   }; 
   this.printTime();
  }
}

const clock = new Clock();

