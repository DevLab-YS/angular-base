import { Routes } from '@angular/router';
import { StylesComponent } from './pages/style-guide/style-guide.component';

export const routes: Routes = [
    {
        path: 'styles',
        component: StylesComponent,
        title: 'Styles'
    },
    { path: '**', redirectTo: 'styles' }
];
