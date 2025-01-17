import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Add a session
  async addSession(session: { date: string; workoutId: number; duration: number }) {
    const sessions = (await this._storage?.get('sessions')) || [];
    sessions.push(session);
    await this._storage?.set('sessions', sessions);
  }

  // Get all sessions
  async getSessions() {
    return (await this._storage?.get('sessions')) || [];
  }

  // Clear all sessions
  async clearSessions() {
    await this._storage?.remove('sessions');
  }
}
