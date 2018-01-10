import {NgModule} from "@angular/core";
import {RedcrossCommonModule} from "../commonModule/RedcrossCommonModule";
import {ResourceSharingComponent} from "./components/ResourceSharingComponent";
import {ResourceSharingRoutingModule} from "./ResourceSharingRoutingModule";
import {ResourceSharingService} from "./services/ResourceSharingService";
import {ResourceUploadDialog} from "./components/ResourceUploadDialog";
import {ResourceComponent} from "./components/ResourceComponent";
import {MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule} from "@angular/material";

@NgModule({
    imports: [
        ResourceSharingRoutingModule,
        RedcrossCommonModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule
    ],
    declarations: [
        ResourceSharingComponent,
        ResourceUploadDialog,
        ResourceComponent
    ],
    providers: [
        ResourceSharingService
    ],
    entryComponents: [
        ResourceUploadDialog
    ]
})
export class ResourceSharingModule {}
