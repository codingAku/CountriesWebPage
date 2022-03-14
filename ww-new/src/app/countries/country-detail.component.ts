import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICountry } from './country';
import { ICurrency } from './currency';

import { CountryService } from './country.service';
import { ILanguage } from './language';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'ww-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {
  country: ICountry | undefined;
  currencies: string[] | undefined;
  languages: string[] | undefined;
  borderCountries: string[] = [];
  errorMessage = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const name = String(params.get('name'));
      this.getCountry(name);
    });
  }

  getCountry(name: string) {
    this.countryService.getCountry(name).subscribe({
      next: (country) => {
        (this.country = country),
          (this.currencies = this.country?.currencies.map(
            (currency: ICurrency) => currency.name
          ));
        this.languages = this.country?.languages.map(
          (language: ILanguage) => language.name
        );
        this.countryService.getCountriesByCode(country!.borders).subscribe({
          next: (countries) => {
            this.borderCountries = countries.map((elem: ICountry) => elem.name);
          },
        });
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  onClick(name: string) {
    this.router.navigate(['/countries', name]);
  }
}
