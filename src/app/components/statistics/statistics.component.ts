import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service';
import { StatsService } from '../../services/stats.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  averageDuration: number = 0;
  totalDuration: number = 0;

  constructor(private exerciseService: ExerciseService, private statsService: StatsService) {}

  async ngOnInit() {
    const sessions = await this.exerciseService.getSessions();
    this.averageDuration = this.statsService.calculateAverageDuration(sessions);
    this.totalDuration = sessions.reduce((sum: any, session: { duration: any; }) => sum + session.duration, 0);
  }
}
