import { Component, OnInit } from '@angular/core';
import {
    FacebookService,
    LoginResponse,
    InitParams,
    LoginOptions
} from 'ngx-facebook';
import { UserModel } from '../../models/users/users.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [FacebookService],
    exportAs: 'homeComponent'
})
export class HomeComponent implements OnInit {
    public user: UserModel =
        JSON.parse(window.localStorage.getItem('user')) || new UserModel();
    private accessToken: string =
        window.localStorage.getItem('accessToken') || '';

    private fields = 'picture{url},gender,birthday,email,last_name,first_name';

    constructor(private fb: FacebookService) {
        let initParams: InitParams = {
            appId: '', //facebookAppId
            xfbml: true,
            version: 'v2.10'
        };

        fb.init(initParams);
    }

    ngOnInit() {}

    public login() {
        const loginOptions: LoginOptions = {
            enable_profile_selector: true,
            return_scopes: true,
            scope: 'public_profile,email,user_birthday,user_photos'
        };

        this.fb
            .login(loginOptions)
            .then((res: LoginResponse) => {
                window.localStorage.setItem(
                    'accessToken',
                    res.authResponse.accessToken
                );
                return this.fb.api(`me?fields=${this.fields}`);
            })
            .then((user: UserModel) => {
                this.user = user;
                window.localStorage.setItem('user', JSON.stringify(user));
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

    public logout() {
        this.fb
            .logout()
            .then((data: any) => {
                window.localStorage.clear();
                this.user = new UserModel();
            })
            .catch((err: any) => {
                console.log(err);
            });
    }
}
