import {Component, Input} from "@angular/core";
import {Post} from "./Post";

@Component({
    selector: "discussion-post",
    templateUrl: "./DiscussionPost.ng.html",
    styleUrls: ["./DiscussionPost.less"]
})
export class DiscussionPostComponent {
    @Input() public post: Post;
}
