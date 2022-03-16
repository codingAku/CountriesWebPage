import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ThemeService } from '../services/theme.service';

@Component({
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  theme!: Observable<string>;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['/countries']);
  }

}
