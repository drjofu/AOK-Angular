import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeispielComponent } from './beispiel/beispiel.component';
import { FormsModule } from '@angular/forms';
import { PlanetsComponent } from './planets/planets.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { SatelliteComponent } from './satellite/satellite.component';
import { SatelliteListComponent } from './satellite-list/satellite-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BeispielComponent,
    PlanetsComponent,
    MeasurementComponent,
    SatelliteComponent,
    SatelliteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
