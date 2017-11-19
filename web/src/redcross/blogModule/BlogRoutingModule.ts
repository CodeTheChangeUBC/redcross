import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./components/BlogComponent";

export const blogRoutes: Routes = [
    {path: "", component: BlogComponent}
];

@NgModule({
    imports: [RouterModule.forChild(blogRoutes)],
    exports: [RouterModule]
})
export class BlogRoutingModule {}
