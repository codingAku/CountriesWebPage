import { Component, OnInit } from '@angular/core';
import { ICountry } from './country';
import { CountryService } from './country.service';

@Component({
  selector: 'ww-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: ICountry[] = [];
  filteredCountries: ICountry[] = [];
  private _listFilter =  "";
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries = this.countryService.getCountries();
    this.filteredCountries = this.countries;
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

}
