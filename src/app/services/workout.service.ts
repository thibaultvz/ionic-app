import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private workouts: { id: number; name: string; duration: number }[] = [];

  constructor() {}

  // Create a new workout
  addWorkout(name: string, duration: number) {
    const newWorkout = {
      id: this.workouts.length + 1,
      name,
      duration,
    };
    this.workouts.push(newWorkout);
    return newWorkout;
  }

  // Get all workouts
  getWorkouts() {
    return [...this.workouts];
  }

  // Update a workout by ID
  updateWorkout(id: number, name: string, duration: number) {
    const workout = this.workouts.find((w) => w.id === id);
    if (workout) {
      workout.name = name;
      workout.duration = duration;
    }
  }

  // Delete a workout by ID
  deleteWorkout(id: number) {
    this.workouts = this.workouts.filter((w) => w.id !== id);
  }
}
