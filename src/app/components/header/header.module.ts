import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { HeaderComponent } from './header.component';
import { UsersService } from '../../models/users/users.service';
import { AuthUser } from '../../services/auth-user.service';
import { AlbumCharComponent } from '../album-char/album-char.component';
import { AlbumsService } from '../../models/albums/albums.service';

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule, ChartsModule],
    declarations: [HeaderComponent, AlbumCharComponent],
    providers: [AuthUser, UsersService, AlbumsService],
    exports: [HeaderComponent],
    entryComponents: [AlbumCharComponent]
})
export class HeaderModule {}
