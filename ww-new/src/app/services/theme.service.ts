import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private mode: BehaviorSubject<string> = new BehaviorSubject('light');
    
    constructor() {}
    
    get mode$(): Observable<string> {
        return this.mode.asObservable();
    }
    
    toggleMode() {
        if (this.mode.value === 'light') {
            this.mode.next('dark');
        } else {
            this.mode.next('light');
        }
    }
}