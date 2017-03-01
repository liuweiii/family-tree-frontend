/**
 * Created by apple on 2017/2/18.
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CreateComponent} from "./person/create/create.component";
import {SearchComponent} from "./person/search/search.component";

const routes: Routes = [
    {path: '', redirectTo: '/search', pathMatch: 'full'},
    {path: 'search', component: SearchComponent},
    {path: 'create', component: CreateComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
