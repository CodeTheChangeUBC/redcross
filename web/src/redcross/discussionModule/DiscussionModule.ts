import {NgModule} from "@angular/core";
import {RedcrossCommonModule} from "../commonModule/RedcrossCommonModule";
import {DiscussionComponent} from "./components/DiscussionComponent";
import {DiscussionRoutingModule} from "./DiscussionRoutingModule";

@NgModule({
    imports: [
        DiscussionRoutingModule,
        RedcrossCommonModule
    ],
    declarations: [
        DiscussionComponent
    ],
    providers: [],
})
export class DiscussionModule {}
