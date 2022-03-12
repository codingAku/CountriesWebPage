import { Injectable } from "@angular/core";
import { ICountry } from "./country";

@Injectable({
    providedIn:'root'
})
export class CountryService {
    getCountries(): ICountry[]{
        return[
            {
                "name" : "Germany",
                "population" : 81770900,
                "region": "Europe",
                "capital": "Berlin"
            },
            {
                "name" : "United States of America",
                "population" : 323947000,
                "region": "America",
                "capital": "Washington, D.C."
            },
            {
                "name" : "Brazil",
                "population" : 206135893,
                "region": "America",
                "capital": "Brasilia"
            },
            {
                "name" : "Iceland",
                "population" : 334300,
                "region": "Europe",
                "capital": "Reykjavk"
            },
            {
                "name" : "Aland Islands",
                "population" : 28875,
                "region": "Europe",
                "capital": "Mariehamn"
            },
            {
                "name" : "Turkey",
                "population" : 80000000,
                "region": "Asia",
                "capital": "Ankara"
            }
        ]

    }
}