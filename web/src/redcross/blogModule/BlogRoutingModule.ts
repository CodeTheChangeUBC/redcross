import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./components/BlogComponent";
import {BlogPostComponent} from "./components/BlogPostComponent";
import {BlogDialogComponent} from "./components/BlogDialogComponent";

export const blogRoutes: Routes = [
    {path: "", component: BlogComponent},
    {path: "postTest", component: BlogPostComponent},
    {path: "dialogTest", component: BlogDialogComponent}
];

@NgModule({
    imports: [RouterModule.forChild(blogRoutes)],
    exports: [RouterModule]
})
export class BlogRoutingModule {}
