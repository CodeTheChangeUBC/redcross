import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./components/BlogComponent";
import {BlogPostComponent} from "./components/BlogPostComponent";

export const blogRoutes: Routes = [
    {path: "", component: BlogComponent},
    {path: "test", component:BlogPostComponent}
];

@NgModule({
    imports: [RouterModule.forChild(blogRoutes)],
    exports: [RouterModule]
})
export class BlogRoutingModule {}
