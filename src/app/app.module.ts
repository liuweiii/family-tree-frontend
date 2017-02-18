import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {PersonsListComponent} from "./person/personsList/personsList.component";
import {PersonService} from "./person/person.service";
import {FamilyDetailComponent} from "./family/familyDetail/familyDetail.component";
import {FamilyService} from "./family/family.service";
import {PersonsSearchComponent} from "./person/personsSearch/personsSearch.component";
import './rxjs-extensions';
import {AppRoutingModule} from "./app.routing.module";
import {PersonCreateComponent} from "./person/personCreate/personCreate.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        PersonsListComponent,
        FamilyDetailComponent,
        PersonsSearchComponent,
        PersonCreateComponent
    ],
    providers: [
        PersonService,
        FamilyService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
