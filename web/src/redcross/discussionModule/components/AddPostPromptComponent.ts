import {Component, Inject} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
    selector: "add-post-dialog",
    templateUrl: "./AddPostPrompt.ng.html",
    styleUrls: ["./DiscussionContainer.less"]
})
export class AddPostPrompt {
    constructor(
        public dialogRef: MatDialogRef<AddPostPrompt>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    public onCancel(): void {
        this.dialogRef.close();
    }
}
