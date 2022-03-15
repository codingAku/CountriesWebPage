import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, tap, throwError } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { ICountry } from "../interfaces/country";


@Injectable({
    providedIn:'root'
})
export class CountryService {

    private countryURL = 'https://restcountries.com/v2/';
    constructor(private http: HttpClient ){
    }
    getCountries(): Observable<ICountry[]> {
        return this.http.get<ICountry[]>(this.countryURL+'all?fields=name,nativeName,alpha3Code,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,flags') .pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
          );
    }
    getCountry(name: string): Observable<ICountry | undefined>{
      return this.getCountries().pipe(
        map((countries: ICountry[]) => countries.find(c => c.name === name))
  
      );
    }

    getCountriesByCode(codes: string[]): Observable<ICountry[]>{
      return this.http.get<ICountry[]>(
        `${this.countryURL}/alpha?codes=${codes.join(',')}`
      );
    }
   


     private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
    
}