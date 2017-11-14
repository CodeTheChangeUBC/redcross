import {NgModule} from "@angular/core";
import {RedcrossCommonModule} from "../commonModule/RedcrossCommonModule";
import {DiscussionComponent} from "./components/DiscussionComponent";
import {DiscussionPostComponent} from "./components/DiscussionPostComponent";
import {DiscussionRoutingModule} from "./DiscussionRoutingModule";

import {MatDialogModule} from "@angular/material";
import {AddPostDialog} from "./components/DiscussionComponent";

@NgModule({
    imports: [
        DiscussionRoutingModule,
        RedcrossCommonModule,
        MatDialogModule
    ],
    declarations: [
        DiscussionComponent,
        DiscussionPostComponent,
        AddPostDialog
    ],
    entryComponents: [
        AddPostDialog
    ],
    providers: [],
})
export class DiscussionModule {}
