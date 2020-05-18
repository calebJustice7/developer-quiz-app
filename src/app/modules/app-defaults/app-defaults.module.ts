import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';

const imports = [
  FormsModule,
  HttpClientModule,
  MatButtonModule,
  MatCardModule,
  MatSnackBarModule,
  MatSliderModule
]

@NgModule({
  declarations: [],
  imports: [imports],
  exports: [imports]
})
export class AppDefaultsModule { }
