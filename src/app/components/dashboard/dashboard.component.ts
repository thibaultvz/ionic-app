import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  sessions: any[] = [];

  constructor(private exerciseService: ExerciseService) {}

  async ngOnInit() {
    this.sessions = await this.exerciseService.getSessions();
  }
}
