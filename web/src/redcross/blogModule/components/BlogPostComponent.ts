import {Component, Input} from "@angular/core";
import {Post} from "./Post";

@Component({
    selector: "blogPost",
    templateUrl: "./BlogPost.ng.html",
    styleUrls: ["./BlogPost.less"]
})
export class BlogPostComponent {
    @Input() public post: Post;
}
