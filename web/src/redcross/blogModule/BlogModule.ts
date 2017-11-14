import {NgModule} from "@angular/core";
import {BlogComponent} from "./components/BlogComponent";
import {RedcrossCommonModule} from "../commonModule/RedcrossCommonModule";
import {BlogRoutingModule} from "./BlogRoutingModule";
import {BlogPostComponent} from "./components/BlogPostComponent";


@NgModule({
    imports: [
        BlogRoutingModule,
        RedcrossCommonModule
    ],
    declarations: [
        BlogComponent,
        BlogPostComponent
    ],
    providers: [],
})
export class BlogModule {}
