import { Component } from '@angular/core';
import { BiometricAuthService } from '../../services/biometric-auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isAuthenticated: boolean = false;

  constructor(private biometricAuthService: BiometricAuthService,private router: Router) {}

  async authenticate() {
    const success = await this.biometricAuthService.authenticate();
    if (success) {
      this.isAuthenticated = true;
      this.router.navigate(['/dashboard']); // Redirige vers la page Dashboard
    } else {
      alert('Authentification échouée.');
    }
  }
}
