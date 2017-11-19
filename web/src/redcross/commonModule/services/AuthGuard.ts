import {Injectable} from "@angular/core";
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AuthenticationService} from "./AuthenticationService";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _authService: AuthenticationService
    ) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this._authService.isLoggedIn()) {
            return true;
        } else {
            this._router.navigate(["/authentication"]);
            return false;
        }
    }
}
