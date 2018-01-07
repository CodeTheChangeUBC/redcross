import {NgModule} from "@angular/core";
import {RedcrossCommonModule} from "../commonModule/RedcrossCommonModule";
import {ResourceSharingComponent} from "./components/ResourceSharingComponent";
import {ResourceSharingRoutingModule} from "./ResourceSharingRoutingModule";
import {ResourceSharingService} from "./services/ResourceSharingService";
import {ResourceUploadDialogComponent} from "./components/ResourceUploadDialogComponent";
import {ResourceComponent} from "./components/ResourceComponent";

@NgModule({
    imports: [
        ResourceSharingRoutingModule,
        RedcrossCommonModule
    ],
    declarations: [
        ResourceSharingComponent,
        ResourceUploadDialogComponent,
        ResourceComponent
    ],
    providers: [
        ResourceSharingService
    ],
})
export class ResourceSharingModule {}
