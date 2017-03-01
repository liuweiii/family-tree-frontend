/**
 * Created by apple on 2017/2/18.
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CreateComponent} from "./person/create/create.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'create', component: CreateComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
