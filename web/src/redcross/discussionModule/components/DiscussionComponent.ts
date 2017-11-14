import {Component, OnInit, Inject} from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

import {DiscussionDataService} from "./DiscussionDataService";

import {Post} from "./Post";
import {Author} from "./Author";

// Note to self: You changed some stuff in global.css

@Component({
    selector: "discussion",
    templateUrl: "./Discussion.ng.html",
    styleUrls: ["./Discussion.less"],
    providers: [DiscussionDataService, MatDialog]
})
export class DiscussionComponent {
    private posts: Post[];
    private currentUser: Author;

    constructor(public dds: DiscussionDataService,
                public md: MatDialog
    ) {}

    // loads test data
    public getData(): void {
        this.posts = this.dds.getTestPosts();
        this.currentUser = this.dds.getTestAuthor();
    }

    private ngOnInit(): void {
        this.getData();
    }

    private addPost(): void {
        const dialog = this.md.open(AddPostDialog, {
            data: {title: "", body: ""}
        });

        dialog.afterClosed().subscribe(result => {
            this.posts.push({title: result.title,
                             content: result.body,
                             author: this.currentUser});
        });
    }
}

@Component({
    selector: "add-post-dialog",
    templateUrl: "./AddPostPrompt.ng.html",
    styleUrls: ["./Discussion.less"]
})
export class AddPostDialog {
    constructor(
        public dialogRef: MatDialogRef<AddPostDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    public onCancel(): void {
        this.dialogRef.close();
    }
}
