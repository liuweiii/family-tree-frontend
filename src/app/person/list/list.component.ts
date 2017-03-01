/**
 * Created by apple on 2017/2/9.
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Person} from "../person";
@Component({
    moduleId: module.id,
    selector: 'persons-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css',]
})
export class ListComponent{
    @Input()
    persons: Person[];

    @Output() selectedPerson: EventEmitter<Person> = new EventEmitter();
    onSelect(person:Person):void{
        this.selectedPerson.emit(person);
    }
}