import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RootComponent} from "./components/RootComponent";
import {AuthGuard} from "../commonModule/services/AuthGuard";
import {AuthenticationComponent} from "./components/AuthenticationComponent";
import {HomeComponent} from "./components/HomeComponent";

const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full"},
    { path: "authentication", component: AuthenticationComponent, pathMatch: "full"},
    {
        path: "blogs",
        loadChildren: "../blogModule/BlogModule#BlogModule",
        canActivate: [AuthGuard]
    },
    {
        path: "resources",
        loadChildren: "../resourceSharingModule/ResourceSharingModule#ResourceSharingModule",
        canActivate: [AuthGuard]
    },
    {
        path: "discussions",
        loadChildren: "../discussionModule/DiscussionModule#DiscussionModule",
        canActivate: [AuthGuard]
    },
    { path: "**", redirectTo: ""}, // direct any other undefined routes to home
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RootRoutingModule {}
