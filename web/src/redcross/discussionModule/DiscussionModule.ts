import {NgModule} from "@angular/core";
import {RedcrossCommonModule} from "../commonModule/RedcrossCommonModule";
import {DiscussionComponent} from "./components/DiscussionContainerComponent";
import {DiscussionPostComponent} from "./components/DiscussionPostComponent";
import {DiscussionRoutingModule} from "./DiscussionRoutingModule";

import {MatDialogModule} from "@angular/material";
import {AddPostPrompt} from "./components/AddPostPromptComponent";

@NgModule({
    imports: [
        DiscussionRoutingModule,
        RedcrossCommonModule,
        MatDialogModule
    ],
    declarations: [
        DiscussionComponent,
        DiscussionPostComponent,
        AddPostPrompt
    ],
    entryComponents: [
        AddPostPrompt
    ],
    providers: [],
})
export class DiscussionModule {}
