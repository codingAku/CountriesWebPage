import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './countries/country-detail.component';
import { CountryListComponent } from './countries/country-list.component';

const routes: Routes = [
  {path:'countries', component: CountryListComponent},
  {path:'countries/:name',component: CountryDetailComponent},
  {path:'', redirectTo: 'countries', pathMatch:'full'},
  {path:'**', redirectTo: 'countries', pathMatch:'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
