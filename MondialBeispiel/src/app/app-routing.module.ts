import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentListComponent } from './continent-list/continent-list.component';
import { World1Component } from './world1/world1.component';
import { CountryListComponent } from './country-list/country-list.component';
import { World2Component } from './world2/world2.component';
import { EditContinent1Component } from './edit-continent1/edit-continent1.component';
import { hasUnsavedChangesGuard } from './helper';
import { EditContinent2Component } from './edit-continent2/edit-continent2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'world1',
    pathMatch: 'full',
  },
  {
    path: 'world1',
    component: World1Component,
  },
  {
    path: 'world2',
    component: World2Component,
    children: [
      {
        path: 'countries/:continentId',
        component: CountryListComponent,
      },
      {
        path: 'edit1/:continentId',
        component: EditContinent1Component,
      },
    ],
  },
  {
    path: 'edit1/:continentId',
    component: EditContinent1Component,
    canDeactivate: [hasUnsavedChangesGuard],
  },
  {
    path: 'edit2/:continentId',
    component: EditContinent2Component,
    canDeactivate: [hasUnsavedChangesGuard],
  },

  {
    path: 'countries/:continentId',
    component: CountryListComponent,
  },
  {
    path: '**',
    redirectTo: 'world1',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
