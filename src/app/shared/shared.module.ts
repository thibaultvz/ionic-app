import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { TimerComponent } from '../components/timer/timer.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TimerComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TimerComponent
  ]
})
export class SharedModule {}
