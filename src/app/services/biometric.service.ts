import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class BiometricAuthService {
  async authenticate() {
    const { FingerprintAIO } = Plugins;

    try {
      const result = await FingerprintAIO['show']({
        clientId: 'FitTrack',
        clientSecret: 'your_secret', // Peut être une chaîne vide
        localizedFallbackTitle: 'Utiliser le mot de passe',
        localizedReason: 'Veuillez vous authentifier',
      });
      return result;
    } catch (error) {
      console.error('Authentification biométrique échouée', error);
      return null;
    }
  }
}
