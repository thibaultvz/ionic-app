import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  timeLeft: number = 60;
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.timeLeft = 60;
  }
}
