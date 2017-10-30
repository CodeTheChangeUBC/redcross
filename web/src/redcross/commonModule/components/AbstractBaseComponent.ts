import {OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Rx";

export class AbstractBaseComponent implements OnDestroy {
    private _subscriptions: Subscription[];

    constructor() { this._subscriptions = []; }

    public addSubscription(subscriptions: Subscription | Subscription[]): void {
        if (subscriptions instanceof Array) {
            this._subscriptions.push(...subscriptions);
        } else {
            this._subscriptions.push(subscriptions);
        }
    }

    public ngOnDestroy(): void {
        this._subscriptions.forEach(subs => subs.unsubscribe());
    }
}
