import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";

@Component({
    selector: "resource-upload-dialog",
    templateUrl: "ResourceUploadDialog.ng.html",
    styleUrls: ["ResourceUploadDialog.less"]
})

export class ResourceUploadDialog {

    constructor(public dialogRef: MatDialogRef<ResourceUploadDialog>) { }

    public closeDialog() {
        this.dialogRef.close();
    }

}
