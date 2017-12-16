import {Component} from "@angular/core";
import {BlogDialogComponent} from "./BlogDialogComponent";
import {MatDialog} from "@angular/material";

import {BlogDataService} from "../services/BlogDataService";

import {Post} from "../models/Post";
import {Author} from "../models/Author";

@Component({
    selector: "blog",
    templateUrl: "./Blog.ng.html",
    styleUrls: ["./Blog.less"],
    providers: [BlogDataService, MatDialog]
})
export class BlogComponent {

    private posts: Post[];
    private currentUser: Author;

    constructor(private dds: BlogDataService, private md: MatDialog) {}

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
