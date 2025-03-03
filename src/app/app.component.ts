import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';

import { sharedImports } from './shared.imports';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...sharedImports, RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular2025';
}
