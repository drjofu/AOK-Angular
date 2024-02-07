import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContinentListComponent } from './continent-list/continent-list.component';
import { World1Component } from './world1/world1.component';
import { CountryListComponent } from './country-list/country-list.component';
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { World2Component } from './world2/world2.component';
import { EditContinent1Component } from './edit-continent1/edit-continent1.component';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

@NgModule({
  declarations: [
    AppComponent,
    ContinentListComponent,
    World1Component,
    CountryListComponent,
    NavbarComponent,
    World2Component,
    EditContinent1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: 'de-DE' }],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
