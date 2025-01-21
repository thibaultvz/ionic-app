import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TimerRoutingModule } from './timer-routing.module';

@NgModule({
  declarations: [TimerComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimerRoutingModule
  ],
})
export class TimerModule {}
