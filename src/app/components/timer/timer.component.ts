import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements  OnDestroy {
  timeLeft: number = 0; // Initialisé à 0 pour commencer le chronomètre
  private intervalId: any;


  constructor(private location: Location) {}



  ngOnDestroy() {
    this.clearTimer();
  }

  goBack() {
    this.location.back();
  }
  startTimer() {
    if (this.intervalId) {
      return; // Empêche de démarrer plusieurs intervalles
    }

    this.intervalId = setInterval(() => {
      this.timeLeft++; // Incrémente le temps chaque seconde
    }, 1000);
  }

  pauseTimer() {
    this.clearTimer();
  }

  resetTimer() {
    this.clearTimer();
    this.timeLeft = 0; // Réinitialise le temps à 0
  }

  private clearTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
