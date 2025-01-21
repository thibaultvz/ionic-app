import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { ExerciseService } from '../../services/exercise.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.scss'],
})
export class NewExerciseComponent implements OnInit {
  workouts: { id: number; name: string; duration: number }[] = [];
  newWorkoutName: string = '';
  newWorkoutDuration: number | null = null;
  selectedWorkoutId: number | null = null;
  duration: number = 0;

  constructor(
    private workoutService: WorkoutService,
    private exerciseService: ExerciseService,
    private location: Location
  ) {}

  async ngOnInit() {
    this.workouts = await this.workoutService.getWorkouts();
  }

  goBack() {
    this.location.back();
  }

  async addWorkout() {
    if (
      this.newWorkoutName.trim() &&
      this.newWorkoutDuration &&
      this.newWorkoutDuration > 0
    ) {
      await this.workoutService.addWorkout(
        this.newWorkoutName,
        this.newWorkoutDuration
      );
      this.workouts = await this.workoutService.getWorkouts();
      this.newWorkoutName = '';
      this.newWorkoutDuration = null;
      alert('Exercice ajouté avec succès!');
    } else {
      alert('Veuillez entrer un nom et une durée valides.');
    }
  }

  async startExercise() {
    if (this.selectedWorkoutId && this.duration > 0) {
      const session = {
        date: new Date().toISOString(),
        workoutId: this.selectedWorkoutId,
        duration: this.duration,
      };
      await this.exerciseService.addSession(session);
      alert('Exercice démarré avec succès!');
    } else {
      alert('Veuillez sélectionner un exercice et entrer une durée valide.');
    }
  }

  onWorkoutSelect(event: any) {
    const selectedWorkout = this.workouts.find(
      (workout) => workout.id === this.selectedWorkoutId
    );
    if (selectedWorkout) {
      this.duration = selectedWorkout.duration;
    } else {
      this.duration = 0;
    }
  }
}
