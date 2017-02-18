/**
 * Created by apple on 2017/2/18.
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {PersonCreateComponent} from "./person/personCreate/personCreate.component";
import {PersonsSearchComponent} from "./person/personsSearch/personsSearch.component";

const routes: Routes = [
    {path: '', redirectTo: '/search', pathMatch: 'full'},
    {path: 'search', component: PersonsSearchComponent},
    {path: 'create', component: PersonCreateComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
