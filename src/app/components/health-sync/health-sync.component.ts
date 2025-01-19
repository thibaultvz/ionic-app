import { Component } from '@angular/core';
import { HealthService } from '../../services/health.service';

@Component({
  selector: 'app-health-sync',
  template: `
    <ion-button expand="block" (click)="syncHealthData()">Synchroniser les données santé</ion-button>
  `,
  styleUrls: ['./health-sync.component.scss'],
})
export class HealthSyncComponent {
  constructor(private healthService: HealthService) {}

  syncHealthData() {
    this.healthService.syncHealthData().then(() => {
      alert('Données synchronisées avec succès !');
    }).catch((error) => {
      alert('Échec de la synchronisation des données.');
      console.error(error);
    });
  }
}
