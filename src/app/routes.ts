import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ProjectsComponent } from './projects/projects.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    },
    { //Определяем путь для роутинга до страницы about
      path: 'about',
      component: AboutComponent,
      title: 'КОНТАКТЫ'
    },
    {
      path: 'news',
      component: NewsComponent,
      title: 'НОВОСТИ'
    },
    {
      path: 'projects',
      component: ProjectsComponent,
      title: 'ПРОЕКТЫ'
    }
  ];
  
  export default routeConfig;