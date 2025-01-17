import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.scss'],
})
export class NewExerciseComponent implements OnInit {
  workouts: { id: number; name: string; duration: number }[] = [];
  newWorkoutName: string = ''; // Initialisez correctement les variables
  newWorkoutDuration: number | null = null;
  selectedWorkoutId: number | null = null;
  duration: number = 0;

  constructor(private workoutService: WorkoutService,private location: Location) {}

  ngOnInit() {
    this.workouts = this.workoutService.getWorkouts();
  }
  goBack() {
    this.location.back();
  }
  addWorkout() {
    console.log('Nom:', this.newWorkoutName); // Debug pour vérifier les données
    console.log('Durée:', this.newWorkoutDuration);

    const duration = Number(this.newWorkoutDuration);

    if (this.newWorkoutName.trim() && !isNaN(duration) && duration > 0) {
      this.workoutService.addWorkout(this.newWorkoutName, duration);
      this.workouts = this.workoutService.getWorkouts(); // Rafraîchir la liste
      this.newWorkoutName = ''; // Réinitialiser les champs
      this.newWorkoutDuration = null;
      alert('Exercice ajouté avec succès!');
    } else {
      alert('Veuillez entrer un nom et une durée valides.');
    }
  }


  // Démarrer une session d'exercice
  startExercise() {
    if (this.selectedWorkoutId && this.duration > 0) {
      console.log(`Exercice: ${this.selectedWorkoutId}, Durée: ${this.duration}`);
      alert('Exercice démarré avec succès!');
    } else {
      alert('Veuillez sélectionner un exercice et entrer une durée valide.');
    }
  }
}
