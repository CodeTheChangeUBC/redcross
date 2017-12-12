import {Injectable} from "@angular/core";

import {Post} from "../models/Post";
import {Author} from "../models/Author";

@Injectable()
export class DiscussionDataService {
    public getTestPosts(): Post[] {
        return [testPost, testPost, testPost];
    }

    public getTestAuthor(): Author {
        return testAuthor;
    }
}

const testAuthor: Author = {
    name: "John Doe"
};

const testPost: Post = {
    title: "This is a test post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" +
    "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" +
    "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla" +
    "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est" +
    "laborum.",
    author: testAuthor
};
