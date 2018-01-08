import {Component} from "@angular/core";
import {MatDialog} from "@angular/material";
import {ResourceUploadDialog} from "./ResourceUploadDialog";

@Component({
    selector: "resource-sharing",
    templateUrl: "ResourceSharing.ng.html",
    styleUrls: ["ResourceSharing.less"]
})

export class ResourceSharingComponent {

    constructor(public dialog: MatDialog) { }

    openDialog() {
        let uploadDialog = this.dialog.open(ResourceUploadDialog, {
            width: "60%"
        });
    }

}
