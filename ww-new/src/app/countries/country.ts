import { ICurrency } from "./currency";
import { IFlag } from "./flag";
import { ILanguage } from "./language";

export interface ICountry {
    name: string;
    nativeName: string;
    code: string;
    population: number;
    region: string;
    capital: string;
    subregion: string;
    topLevelDomain: string[];
    currencies: ICurrency[];
    languages: ILanguage[];
    borders: string[];
    flags: IFlag;
}
