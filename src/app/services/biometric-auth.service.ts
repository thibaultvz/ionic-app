import { Injectable } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Injectable({
  providedIn: 'root',
})
export class BiometricAuthService {
  constructor(private faio: FingerprintAIO) {}

  async authenticate(): Promise<boolean> {
    try {
      const available = await this.faio.isAvailable();
      if (available) {
        await this.faio.show({
          title: 'Authentification requise',
          subtitle: 'Utilisez votre empreinte ou FaceID',
          description: 'Veuillez vous authentifier pour continuer',
          disableBackup: true,
        });
        return true;
      } else {
        console.error('Biométrie non disponible sur cet appareil');
        return false;
      }
    } catch (error) {
      console.error('Erreur d\'authentification biométrique:', error);
      return false;
    }
  }
}
