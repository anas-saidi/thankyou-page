import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentYear = new Date().getFullYear();
  agencyName = 'AutoDealer';
  title = 'thank-you-page';
}
