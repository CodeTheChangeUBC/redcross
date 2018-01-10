import {Injectable} from "@angular/core";
import {Resource} from "../models/Resource";

@Injectable()
export class ResourceSharingService {

    public getResources(): Resource[] {
        return testData;
    }

}

const testDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a leo dui. Nam laoreet lorem " +
    "tincidunt blandit consectetur. Nam vitae egestas turpis. Ut ex tellus, molestie id vulputate sit amet, " +
    "dignissim vestibulum leo. Praesent et porttitor eros. Donec tincidunt ligula vel nulla vestibulum porttitor.";

const testData = [
    new Resource("Resource 1", testDesc),
    new Resource("Resource 2", testDesc),
    new Resource("Resource 3", testDesc),
    new Resource("Resource 4", testDesc),
    new Resource("Resource 5", testDesc)
];
