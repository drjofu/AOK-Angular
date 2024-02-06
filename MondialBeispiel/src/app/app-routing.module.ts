import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentListComponent } from './continent-list/continent-list.component';
import { World1Component } from './world1/world1.component';
import { CountryListComponent } from './country-list/country-list.component';
import { World2Component } from './world2/world2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'world1',
    pathMatch: 'full'
  },
  {
    path: 'world1',
    component: World1Component
  },
  {
    path:'world2',
    component:World2Component,
    children:[
      {
        path: 'countries/:continentId',
        component:CountryListComponent
      }
    ]
  },
  {
    path: 'countries/:continentId',
    component: CountryListComponent
  },
  {
    path: '**',
    redirectTo: 'world1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
