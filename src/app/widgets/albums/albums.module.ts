import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './albums.routing';
import { AlbumsListComponent } from './list/list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { AlbumsService } from '../../models/albums/albums.service';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { FancyboxDirective } from '../../directives/fancybox.directive';

@NgModule({
    imports: [CommonModule, InfiniteScrollModule, NgbModule.forRoot(), routing],
    declarations: [
        AlbumsListComponent,
        PhotoListComponent,
        SpinnerComponent,
        FancyboxDirective
    ],
    providers: [AlbumsService],
    entryComponents: []
})
export class AlbumsModule {}
