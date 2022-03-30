import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';

import { IncidencesRoutingModule } from './incidences-routing.module';
import { IncidencesComponent } from './incidences/incidences.component';


@NgModule({
  declarations: [
    IncidencesComponent
  ],
  imports: [
    CommonModule,
    IncidencesRoutingModule,
    MatSortModule,
    MatCardModule
  ]
})
export class IncidencesModule { }
