import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DiscussionComponent} from "./components/DiscussionContainerComponent";

export const discussionRoutes: Routes = [
    {path: "", component: DiscussionComponent}
];

@NgModule({
    imports: [RouterModule.forChild(discussionRoutes)],
    exports: [RouterModule]
})
export class DiscussionRoutingModule {}
