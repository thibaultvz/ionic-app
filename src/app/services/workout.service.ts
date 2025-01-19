import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private workouts: { id: number; name: string; duration: number }[] = [];
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.workouts = (await this._storage?.get('workouts')) || [];
  }

  async addWorkout(name: string, duration: number) {
    const newWorkout = { id: this.workouts.length + 1, name, duration };
    this.workouts.push(newWorkout);
    await this._storage?.set('workouts', this.workouts);
    return newWorkout;
  }

  async getWorkouts() {
    this.workouts = (await this._storage?.get('workouts')) || [];
    return [...this.workouts];
  }
}
