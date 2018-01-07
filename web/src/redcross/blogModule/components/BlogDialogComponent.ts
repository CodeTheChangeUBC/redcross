import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
    selector: "blogDialog",
    templateUrl: "./BlogDialog.ng.html",
    styleUrls: ["./BlogDialog.less"]
})

export class BlogDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<BlogDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}

    public onCancel(): void {
        this.dialogRef.close();
    }
}
