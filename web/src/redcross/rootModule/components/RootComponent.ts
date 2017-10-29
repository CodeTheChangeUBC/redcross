import "../../../global.css";

import {Component, ViewChild, AfterViewInit} from "@angular/core";
import {SpinnerAnchor} from "./SpinnerComponent";
import {Subscription} from "rxjs/Subscription";
import {SpinnerService} from "../../commonModule/services/SpinnerService";
import {AbstractBaseComponent} from "../../commonModule/components/AbstractBaseComponent";

@Component({
    selector: "redcross",
    templateUrl: "./Root.ng.html",
    styleUrls: ["./Root.less"]
})
export class RootComponent extends AbstractBaseComponent implements AfterViewInit {
    @ViewChild(SpinnerAnchor) public spinnerAnchor: SpinnerAnchor;

    constructor(
        private _spinnerService: SpinnerService
    ) {
        super();
    }

    public ngAfterViewInit(): void {
        const subscription: Subscription = this._spinnerService.control.subscribe(
            (control: boolean) => {
                if (control) {
                    this.spinnerAnchor.createSpinner();
                } else {
                    this.spinnerAnchor.destroySpinner();
                }
            }
        );
        this.addSubscription(subscription);
    }
}
