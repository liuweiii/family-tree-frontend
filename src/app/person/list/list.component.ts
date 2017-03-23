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
    @Output() selectedPage: EventEmitter<number> = new EventEmitter();
    onSelect(person:Person):void{
        this.selectedPerson.emit(person);
    }

    public totalItems:number = 175;
    public currentPage:number = 1;

    public onPageChanged(event:any):void {
        this.selectedPage.emit(event.page);
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    }
}