import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material";

import {DiscussionDataService} from "./services/DiscussionDataService";
import {AddPostPrompt} from "./AddPostPromptComponent";

import {Post} from "./models/Post";
import {Author} from "./models/Author";

// Note to self: You changed some stuff in global.css

@Component({
    selector: "discussion",
    templateUrl: "./DiscussionContainer.ng.html",
    styleUrls: ["./DiscussionContainer.less"],
    providers: [DiscussionDataService, MatDialog, AddPostPrompt]
})
export class DiscussionComponent {
    private posts: Post[];
    private currentUser: Author;

    constructor(private dds: DiscussionDataService,
                private md: MatDialog
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
        const dialog = this.md.open(AddPostPrompt, {
            data: {title: "", body: ""},
            width: "60%"
        });

        dialog.afterClosed().subscribe(result => {
            if (result) {
                this.posts.push({
                    title: result.title,
                    content: result.body,
                    author: this.currentUser
                });
            }
        });
    }
}
