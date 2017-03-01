import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {ListComponent} from "./person/list/list.component";
import {PersonService} from "./person/person.service";
import {DetailComponent} from "./family/detail/detail.component";
import {FamilyService} from "./family/family.service";
import {SearchComponent} from "./person/search/search.component";
import './rxjs-extensions';
import {AppRoutingModule} from "./app.routing.module";
import {CreateComponent} from "./person/create/create.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        ListComponent,
        DetailComponent,
        SearchComponent,
        CreateComponent
    ],
    providers: [
        PersonService,
        FamilyService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
