import {NgModule} from "@angular/core";
import {BlogComponent} from "./components/BlogComponent";
import {RedcrossCommonModule} from "../commonModule/RedcrossCommonModule";
import {BlogRoutingModule} from "./BlogRoutingModule";

@NgModule({
    imports: [
        BlogRoutingModule,
        RedcrossCommonModule
    ],
    declarations: [
        BlogComponent
    ],
    providers: [],
})
export class BlogModule {}
