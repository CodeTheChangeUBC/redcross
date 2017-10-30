import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ResourceSharingComponent} from "./components/ResourceSharingComponent";

export const resourceSharingRoutes: Routes = [
    {path: "", component: ResourceSharingComponent}
];

@NgModule({
    imports: [RouterModule.forChild(resourceSharingRoutes)],
    exports: [RouterModule]
})
export class ResourceSharingRoutingModule {}
