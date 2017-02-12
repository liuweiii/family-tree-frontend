/**
 * Created by apple on 2017/2/9.
 */

import {Component, ViewChild, Input} from "@angular/core";
import {Person} from "../person";
import {FamilyDetailComponent} from "../../family/familyDetail/familyDetail.component";
@Component({
    moduleId: module.id,
    selector: 'persons-list',
    templateUrl: 'personsList.component.html',
    styleUrls: ['personsList.component.css',]
})
export class PersonsListComponent{
    selectedPerson: Person;

    @Input()
    persons: Person[];
    @ViewChild(FamilyDetailComponent) familyDetail:FamilyDetailComponent;

    onSelect(person:Person):void{
        this.selectedPerson = person;
        if(this.familyDetail) {
            this.familyDetail.reload(person);
        }
    }
}