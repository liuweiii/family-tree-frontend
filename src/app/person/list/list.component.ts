/**
 * Created by apple on 2017/2/9.
 */

import {Component, ViewChild, Input} from "@angular/core";
import {Person} from "../person";
import {DetailComponent} from "../../family/detail/detail.component";
@Component({
    moduleId: module.id,
    selector: 'persons-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css',]
})
export class ListComponent{
    selectedPerson: Person;

    @Input()
    persons: Person[];
    @ViewChild(DetailComponent) familyDetail:DetailComponent;

    onSelect(person:Person):void{
        this.selectedPerson = person;
        if(this.familyDetail) {
            this.familyDetail.reload(person);
        }
    }
}