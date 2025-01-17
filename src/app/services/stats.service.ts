import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  constructor() {}

  // Calculate average workout duration
  calculateAverageDuration(sessions: { date: string; workoutId: number; duration: number }[]) {
    if (sessions.length === 0) return 0;
    const total = sessions.reduce((sum, session) => sum + session.duration, 0);
    return total / sessions.length;
  }

  // Get the most frequent workout
  getMostFrequentWorkout(
    sessions: { date: string; workoutId: number; duration: number }[],
    workouts: { id: number; name: string; duration: number }[]
  ) {
    const frequency = new Map<number, number>();

    sessions.forEach((session) => {
      const count = frequency.get(session.workoutId) || 0;
      frequency.set(session.workoutId, count + 1);
    });

    const mostFrequentId = Array.from(frequency.entries()).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
    return workouts.find((workout) => workout.id === mostFrequentId)?.name || 'Unknown';
  }
}
