import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service';
import { StatsService } from '../../services/stats.service';
import { Location } from '@angular/common';
import Chart from 'chart.js/auto'; // Ajout de Chart.js pour les graphiques

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  averageDuration: number = 0;
  totalDuration: number = 0;
  sessions: { duration: number; date: string }[] = [];
  chart: any; // Référence pour le graphique

  constructor(
    private exerciseService: ExerciseService,
    private statsService: StatsService,
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }

  async ngOnInit() {
    this.sessions = await this.exerciseService.getSessions();
    console.log('Sessions:', this.sessions); // Debug pour vérifier les données

    this.totalDuration = this.statsService.calculateTotalDuration(this.sessions);
    this.averageDuration = this.statsService.calculateAverageDuration(this.sessions);

    if (this.sessions.length > 0) {
      this.initializeChart();
    }
  }


  // Méthode pour initialiser un graphique avec Chart.js
  initializeChart() {


    setTimeout(() => {
      const ctx = document.getElementById('statsChart') as HTMLCanvasElement;
      if (!ctx) {
        console.error('Canvas element not found!');
        return;
      }
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.sessions.map((s) => new Date(s.date).toLocaleDateString()),
          datasets: [
            {
              label: 'Durée des exercices (min)',
              data: this.sessions.map((s) => s.duration),
              borderColor: '#42A5F5',
              backgroundColor: 'rgba(66, 165, 245, 0.2)',
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Durée (min)',
              },
            },
          },
        },
      });
    }, 0);
  }
}
