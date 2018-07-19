import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { AuthUser } from '../services/auth-user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authUser: AuthUser) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {
        return this.authUser.checkUser().then(loggedIN => {
            if (loggedIN) {
                return true;
            }

            this.router.navigate(['login']);
            return false;
        });
    }
}
