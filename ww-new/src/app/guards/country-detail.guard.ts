import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ICountry } from '../interfaces/country';
import { CountryService } from '../services/country.service';

@Injectable({
  providedIn: 'root',
})
export class CountryDetailGuard implements CanActivate {
  country: ICountry | undefined;
  constructor(private router: Router, private countryService: CountryService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const name = route.paramMap.get('name');
    this.countryService.getCountry(name!).subscribe({
      next: (country) => {
        this.country = country;
        if (this.country === undefined) {
          this.router.navigate(['/pageNotFound']);
          return false;
        }
        return true;
      },
    });
    return true;
  }
}
