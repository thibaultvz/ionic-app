import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  calculateTotalDuration(sessions: { duration: number }[]) {
    return sessions.reduce((sum, session) => sum + session.duration, 0);
  }

  calculateAverageDuration(sessions: { duration: number }[]) {
    if (sessions.length === 0) return 0;
    return this.calculateTotalDuration(sessions) / sessions.length;
  }
}
