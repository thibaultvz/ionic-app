import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../../services/exercise.service';
import { WorkoutService } from '../../services/workout.service';
import { Location } from '@angular/common';


interface Session {
  id: number;
  workoutId: number;
  duration: number;
  date: string;
  workoutName?: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  sessions: Session[] = [];
  workouts: { id: number; name: string; duration: number }[] = [];

  constructor(
    private exerciseService: ExerciseService,
    private workoutService: WorkoutService,
    private location: Location

  ) {}
  goBack() {
    this.location.back();
  }
  async ngOnInit() {
    // Récupérer les sessions et les exercices en parallèle
    const [sessions, workouts] = await Promise.all([
      this.exerciseService.getSessions(),
      this.workoutService.getWorkouts(),
    ]);

    this.workouts = workouts;

    // Mapper les sessions pour inclure le nom de l'exercice
    this.sessions = sessions.map((session: { workoutId: number; }, index: number) => {
      const workout = workouts.find((w) => w.id === session.workoutId);
      return {
        id: index + 1,
        ...session,
        workoutName: workout ? workout.name : 'Exercice Inconnu',
      };
    });
  }
}
