import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map();

  set(key: string, data: any, ttl: number = 3600000) {
    if (this.cache.size >= 100) {
      this.cleanup();
    }
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }

  get(key: string): any {
    const entry = this.cache.get(key);
    if (!entry) return null;
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }
    return entry.data;
  }

  cleanup() {
    this.cache.clear();
  }
}
