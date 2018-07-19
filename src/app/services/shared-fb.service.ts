import { Injectable } from '@angular/core';
import {
    FacebookService,
    InitParams,
    LoginOptions,
    LoginResponse,
    LoginStatus
} from 'ngx-facebook';

declare type ApiMethod = 'get' | 'post' | 'delete';

@Injectable()
export class SharedFBService {
    constructor(private fb: FacebookService) {
        let initParams: InitParams = {
            appId: '', //facebookAppId
            cookie: true,
            xfbml: true,
            version: 'v2.10'
        };

        fb.init(initParams);
    }

    api(path: string, method?: ApiMethod, params?: any): Promise<any> {
        return this.fb.api(path);
    }

    getLoginStatus(): Promise<LoginStatus> {
        return this.fb.getLoginStatus();
    }

    login(options?: LoginOptions): Promise<LoginResponse> {
        return this.fb.login(options);
    }

    logout(): Promise<any> {
        return this.fb.logout();
    }
}
