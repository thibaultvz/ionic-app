import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  sessions: { date: string; workoutId: number; duration: number }[] = [];

  constructor(private exerciseService: ExerciseService) {}

  async ngOnInit() {
    this.sessions = await this.exerciseService.getSessions();
  }
}
