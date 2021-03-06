import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'ww-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  theme!: Observable<string>;

  constructor(
    private themeService: ThemeService
  ) {}

    ngOnInit(): void {
        this.theme = this.themeService.observable$;
    }
   
    toggleTheme(){
      this.themeService.toggleobservable();
    }


 
}
