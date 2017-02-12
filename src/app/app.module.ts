import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {PersonsListComponent} from "./person/personsList/personsList.component";
import {PersonService} from "./person/person.service";
import {FamilyDetailComponent} from "./family/familyDetail/familyDetail.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        PersonsListComponent,
        FamilyDetailComponent,
    ],
    providers: [PersonService],
    bootstrap: [AppComponent]
})
export class AppModule {}
