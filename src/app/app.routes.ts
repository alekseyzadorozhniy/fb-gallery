import { Routes } from '@angular/router';
import { EmptyComponent } from './components/views/empty.component';
import { BaseComponent } from './components/views/base.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './views/login/login.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: BaseComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'albums',
                pathMatch: 'full'
            },
            {
                path: 'albums',
                loadChildren: 'app/views/albums/albums.module#AlbumsModule'
            }
        ]
    },
    {
        path: '',
        component: EmptyComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }
];
