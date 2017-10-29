import {Component} from "@angular/core";
import {SpinnerService} from "../../commonModule/services/SpinnerService";

@Component({
    selector: "home",
    templateUrl: "./Home.ng.html",
    styleUrls: ["./Home.less"]
})
export class HomeComponent {
    constructor(
        private _spinnerService: SpinnerService
    ) {}

    public showSpinner(): void {
        this._spinnerService.showSpinner();
        setTimeout(
            () => this._spinnerService.hideSpinner(),
            2000
        );
    }
}
