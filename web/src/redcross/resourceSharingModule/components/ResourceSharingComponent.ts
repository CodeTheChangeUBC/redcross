import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material";
import {ResourceUploadDialog} from "./ResourceUploadDialog";
import {Resource} from "../models/Resource";
import {ResourceSharingService} from "../services/ResourceSharingService";

@Component({
    selector: "resource-sharing",
    templateUrl: "ResourceSharing.ng.html",
    styleUrls: ["ResourceSharing.less"]
})

export class ResourceSharingComponent implements OnInit {

    private resources: Resource[];

    constructor(public dialog: MatDialog, private resourcesService: ResourceSharingService) { }

    public ngOnInit() {
        this.resources = this.resourcesService.getResources();
    }

    public openDialog() {
        const uploadDialog = this.dialog.open(ResourceUploadDialog, {
            width: "60%"
        });
    }

}
