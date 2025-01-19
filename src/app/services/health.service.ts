import { Injectable } from '@angular/core';
import AppleHealthKit, { HealthKitPermissions, HealthValue } from 'react-native-health';

@Injectable({
  providedIn: 'root',
})
export class HealthService {
  private permissions: HealthKitPermissions = {
    permissions: {
      read: [
        AppleHealthKit.Constants.Permissions.HeartRate,
        AppleHealthKit.Constants.Permissions.Steps,
        AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
      ],
      write: [
        AppleHealthKit.Constants.Permissions.Steps,
        AppleHealthKit.Constants.Permissions.Workout,
      ],
    },
  };

  constructor() {}

  /**
   * Initialise HealthKit et demande les permissions
   */
  async initHealthKit(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      AppleHealthKit.initHealthKit(this.permissions, (error) => {
        if (error) {
          console.error('[ERROR] Cannot initialize HealthKit:', error);
          reject(false);
        } else {
          console.log('[INFO] HealthKit initialized successfully');
          resolve(true);
        }
      });
    });
  }

  /**
   * Récupère les données de fréquence cardiaque
   */
  async getHeartRateSamples(startDate: Date): Promise<HealthValue[]> {
    return new Promise((resolve, reject) => {
      const options = {
        startDate: startDate.toISOString(),
      };

      AppleHealthKit.getHeartRateSamples(options, (error, results) => {
        if (error) {
          console.error('[ERROR] Cannot fetch heart rate samples:', error);
          reject(error);
        } else {
          console.log('[INFO] Heart rate samples:', results);
          resolve(results);
        }
      });
    });
  }

  /**
   * Récupère les données de pas effectués
   */
  async getSteps(startDate: Date): Promise<HealthValue[]> {
    return new Promise((resolve, reject) => {
      const options = {
        startDate: startDate.toISOString(),
      };

      AppleHealthKit.getStepCount(options, (error, results) => {
        if (error) {
          console.error('[ERROR] Cannot fetch steps data:', error);
          reject(error);
        } else {
          console.log('[INFO] Steps data:', results);
          resolve(results);
        }
      });
    });
  }

  /**
   * Synchronise les données santé
   */
  async syncHealthData() {
    try {
      await this.initHealthKit();

      const startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // Derniers 7 jours
      const heartRates = await this.getHeartRateSamples(startDate);
      const steps = await this.getSteps(startDate);

      console.log('[INFO] Heart Rates:', heartRates);
      console.log('[INFO] Steps:', steps);

      // Implémentez la logique pour utiliser les données synchronisées
    } catch (error) {
      console.error('[ERROR] Synchronisation des données santé échouée:', error);
    }
  }
}
