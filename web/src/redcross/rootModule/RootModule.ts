import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {RootComponent} from "./components/RootComponent";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        RootComponent
    ],
    bootstrap: [RootComponent],
    providers: [],
    entryComponents: []
})
export class RootModule {}