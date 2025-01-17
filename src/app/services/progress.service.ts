import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  constructor() {}

  // Calculate total duration of workouts
  calculateTotalDuration(sessions: { date: string; workoutId: number; duration: number }[]) {
    return sessions.reduce((total, session) => total + session.duration, 0);
  }

  // Calculate progression over time
  calculateWeeklyProgress(sessions: { date: string; workoutId: number; duration: number }[]) {
    const progress = new Map<string, number>();

    sessions.forEach((session) => {
      const week = this.getWeekFromDate(new Date(session.date));
      const previous = progress.get(week) || 0;
      progress.set(week, previous + session.duration);
    });

    return Array.from(progress.entries());
  }

  private getWeekFromDate(date: Date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const diff = (date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24);
    return `Week ${Math.ceil((diff + startOfYear.getDay() + 1) / 7)}`;
  }
}
