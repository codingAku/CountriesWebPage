import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailGuard } from './guards/country-detail.guard';
import { CountryDetailComponent } from './pages/country-detail.component';
import { CountryListComponent } from './pages/country-list.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';

const routes: Routes = [
  {path:'countries', component: CountryListComponent},
  {path:'countries/:name',canActivate:[CountryDetailGuard], component: CountryDetailComponent},
  {path:'pageNotFound', component: PageNotFoundComponent},
  {path:'', redirectTo: 'countries', pathMatch:'full'},
  {path:'**', redirectTo: 'pageNotFound', pathMatch:'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
