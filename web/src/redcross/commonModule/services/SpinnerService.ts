import {Injectable} from "@angular/core";
import {BehaviorSubject, Subscription} from "rxjs/Rx";

@Injectable()
export class SpinnerService {
    public control: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public showSpinner(): void {
        this.control.next(true);
    }

    public hideSpinner(subs?: Subscription): void {
        this.control.next(false);
        if (subs) {
            subs.unsubscribe();
        }
    }
}
