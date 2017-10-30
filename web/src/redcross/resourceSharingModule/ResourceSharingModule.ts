import {NgModule} from "@angular/core";
import {RedcrossCommonModule} from "../commonModule/RedcrossCommonModule";
import {ResourceSharingComponent} from "./components/ResourceSharingComponent";
import {ResourceSharingRoutingModule} from "./ResourceSharingRoutingModule";

@NgModule({
    imports: [
        ResourceSharingRoutingModule,
        RedcrossCommonModule
    ],
    declarations: [
        ResourceSharingComponent
    ],
    providers: [],
})
export class ResourceSharingModule {}
