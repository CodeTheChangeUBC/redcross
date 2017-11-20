import {NgModule} from "@angular/core";
import {BlogComponent} from "./components/BlogComponent";
import {RedcrossCommonModule} from "../commonModule/RedcrossCommonModule";
import {BlogRoutingModule} from "./BlogRoutingModule";
import {BlogPostComponent} from "./components/BlogPostComponent";
import {BlogDialogComponent} from "./components/BlogDialogComponent";

import {MatDialogModule} from "@angular/material";

@NgModule({
    imports: [
        BlogRoutingModule,
        RedcrossCommonModule,
        MatDialogModule
    ],
    declarations: [
        BlogComponent,
        BlogPostComponent,
        BlogDialogComponent
    ],
    providers: [],
})
export class BlogModule {}
