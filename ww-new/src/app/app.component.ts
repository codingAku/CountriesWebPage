import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from './countries/theme.service';

@Component({
  selector: 'ww-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ww-new';
  theme!: Observable<Theme>;

  constructor(
    private themeService: ThemeService
  ) {}

 
}
