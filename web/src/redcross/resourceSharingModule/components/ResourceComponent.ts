import {Component, Input} from "@angular/core";
import {Resource} from "../models/Resource";

@Component({
    selector: "resource-card",
    templateUrl: "Resource.ng.html",
    styleUrls: ["Resource.less"]
})

export class ResourceComponent {

    @Input() private resource: Resource;

}
