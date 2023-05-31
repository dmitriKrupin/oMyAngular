import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
    NgbDropdownModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: { class: 'd-block' },
})

export class AppComponent {
  title = 'oMyAngular';

  filterResults(text: string) {
    //todo: написать запрос для поиска по всему сайту
    return null;
  }
}