import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';
import { BaseComponent } from './base.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
    declarations: [EmptyComponent, BaseComponent],
    imports: [CommonModule, RouterModule, HeaderModule],
    exports: [EmptyComponent, BaseComponent]
})
export class ViewsModule {}
