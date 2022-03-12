import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICountry } from './country';
import { CountryService } from './country.service';

@Component({
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit, OnDestroy {
  countries: ICountry[] = [];
  filteredCountries: ICountry[] = [];
  sub: Subscription | undefined;
  private _listFilter =  "";
  constructor(private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
   this.sub = this.countryService.getCountries().subscribe(
      {
        next: countries => { 
          this.countries = countries
          this.filteredCountries = this.countries;
        }
      }
    );
  }

  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredCountries = this.performFilter(value);
  }

  performFilter(value: string): ICountry[] {
      value = value.toLowerCase();
      return this.countries.filter(
        (country : ICountry) => country.name.toLowerCase().includes(value)
      );
  }

  onClick(region : string){
    this.filteredCountries = this.performFilterForDropdown(region);
  }

  performFilterForDropdown(region: string): ICountry[]{
    return this.countries.filter(
      (country: ICountry) => country.region.toLowerCase().includes(region.toLowerCase())
    );
  }

    onClickRoute(name: string){
      this.router.navigate(['/countries', name]);
    }
}
