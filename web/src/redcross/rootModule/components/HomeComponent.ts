import {Component} from "@angular/core";
import {SpinnerService} from "../../commonModule/services/SpinnerService";
import {RedcrossInfoService} from "../../commonModule/services/RedcrossInfoService";
import {RedcrossHttp} from "../../commonModule/services/RedcrossHttp";

@Component({
    selector: "home",
    templateUrl: "./Home.ng.html",
    styleUrls: ["./Home.less"]
})
export class HomeComponent {
    constructor(
        private _spinnerService: SpinnerService,
        private _infoBarService: RedcrossInfoService,
        private _http: RedcrossHttp
    ) {}

    public showSpinner(): void {
        this._spinnerService.showSpinner();
        setTimeout(
            () => this._spinnerService.hideSpinner(),
            2000
        );
    }

    public showInfoBar(): void {
        this._infoBarService.notifyInfo("Info Bar");
    }

    public demoFailHttpReq(): void {
        this._http.get("/abc").subscribe();
    }
}
