import {Injectable} from "@angular/core";

@Injectable()
export class AuthenticationService {
    public isLoggedIn(): boolean {
        return true;
    }
}
