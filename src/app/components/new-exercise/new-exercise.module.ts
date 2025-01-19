import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NewExerciseComponent } from './new-exercise.component';

@NgModule({
  declarations: [NewExerciseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Pour gérer les formulaires
    IonicModule,
    RouterModule.forChild([{ path: '', component: NewExerciseComponent }]),
  ],
})
export class NewExerciseModule {}
