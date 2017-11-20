import {Component, OnInit, Inject} from "@angular/core";
import {BlogPostComponent} from "./BlogPostComponent";
import {BlogDialogComponent} from "./BlogDialogComponent";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

import {DiscussionDataService} from "./BlogDataService";

import {Post} from "./Post";
import {Author} from "./Author";


@Component({
    selector: "blog",
    templateUrl: "./Blog.ng.html",
    styleUrls: ["./Blog.less"],
    providers: [DiscussionDataService, MatDialog]
})
export class BlogComponent {

    private posts: Post[]
    private currentUser: Author;

    constructor(public dds: DiscussionDataService,
               public md: MatDialog) {}

        // loads test data
        public getData(): void {
        this.posts = this.dds.getTestPosts();
        this.currentUser = this.dds.getTestAuthor();
    }

        private ngOnInit(): void {
        this.getData();
    }

        private addPost(): void {
        const dialog = this.md.open(BlogDialogComponent, {
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
        templateUrl: "./BlogDialog.ng.html",
        styleUrls: ["./BlogDialog.less"]
})
    export class AddPostDialog {
    constructor(
        public dialogRef: MatDialogRef<AddPostDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    public onCancel(): void {
        this.dialogRef.close();
    }
}
    

