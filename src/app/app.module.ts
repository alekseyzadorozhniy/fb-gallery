import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { FacebookModule } from 'ngx-facebook';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { AuthGuard } from './guards/auth.guard';
import { SharedFBService } from './services/shared-fb.service';
import { ViewsModule } from './components/views/views.module';
import { LoginComponent } from './widgets/login/login.component';

@NgModule({
    declarations: [AppComponent, LoginComponent],
    imports: [
        BrowserModule,
        FacebookModule.forRoot(),
        RouterModule.forRoot(ROUTES),
        NgbModule.forRoot(),
        BrowserAnimationsModule,
        ViewsModule,
        ChartsModule
    ],
    providers: [AuthGuard, SharedFBService],
    bootstrap: [AppComponent]
})
export class AppModule {}
