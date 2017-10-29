import {NgModule} from "@angular/core";
import {RootComponent} from "./components/RootComponent";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {RootRoutingModule} from "./RootRoutingModule";
import {RedcrossCommonModule} from "../commonModule/RedcrossCommonModule";
import {AuthenticationService} from "../commonModule/services/AuthenticationService";
import {AuthGuard} from "../commonModule/services/AuthGuard";
import {AuthenticationComponent} from "./components/AuthenticationComponent";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {HomeComponent} from "./components/HomeComponent";
import {SpinnerService} from "../commonModule/services/SpinnerService";
import {SpinnerAnchor, SpinnerComponent} from "./components/SpinnerComponent";

@NgModule({
    imports: [
        RootRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        RedcrossCommonModule
    ],
    declarations: [
        RootComponent,
        HomeComponent,
        AuthenticationComponent,
        SpinnerAnchor,
        SpinnerComponent
    ],
    bootstrap: [RootComponent],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        AuthenticationService,
        AuthGuard,
        SpinnerService
    ],
    entryComponents: [
        SpinnerComponent
    ]
})
export class RootModule {}
