import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule
  ],
  template: `
  <main>
    <header class="brand-name">
      <ul class="nav">
        <li class="brand" [routerLink]="['/']">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </li>
        <li class="search">
          <a class="nav-link disabled" aria-current="page" href="#">ПОИСК ПО САЙТУ</a>
        </li>
        <li class="projects">
          <a class="nav-link active" [routerLink]="['/projects']">ПРОЕКТЫ</a>
        </li>
        <li class="news">
          <a class="nav-link active" [routerLink]="['/news']">НОВОСТИ</a>
        </li>
        <li class="contacts">
          <a class="nav-link active" [routerLink]="['/about']">КОНТАКТЫ</a>
        </li>
        <li class="login">
          <a class="nav-link disabled">ЛИЧНЫЙ КАБИНЕТ</a>
        </li>
      </ul>
    </header>
    <section class="content">
    <router-outlet></router-outlet>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'oMyAngular';
}
