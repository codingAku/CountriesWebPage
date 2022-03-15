import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private observable: BehaviorSubject<string> = new BehaviorSubject('light');
    
    constructor() {}
    
    get observable$(): Observable<string> {
        return this.observable.asObservable();
    }
    
    toggleobservable() {
        if (this.observable.value === 'light') {
            this.observable.next('dark');
        } else {
            this.observable.next('light');
        }
    }
}