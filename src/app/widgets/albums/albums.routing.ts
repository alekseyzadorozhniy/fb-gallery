import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AlbumsListComponent } from './list/list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
    { path: '', component: AlbumsListComponent },
    { path: ':id', component: PhotoListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
