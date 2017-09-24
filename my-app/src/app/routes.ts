import { HomeResolver } from './components/home-component/home.resolver';
import {Routes} from '@angular/router';


import { HomeComponent } from './components/home-component/home.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent, resolve: {humans: HomeResolver}},
    {path: '', pathMatch: 'full', redirectTo: '/home'}
];
