/**
 * Created by apple on 2017/2/12.
 */

import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Person} from "../person";
import {PersonService} from "../person.service";
@Component({
    selector:"person-search",
    moduleId:module.id,
    styleUrls: ["search.component.css"],
    templateUrl:"search.component.html",
    providers: [PersonService]
})
export class SearchComponent implements OnInit{
    persons: Observable<Person[]>;
    private searchTerms = new Subject<string>();

    constructor(private personService:PersonService){}

    @Output() selectedPerson:EventEmitter<Person> = new EventEmitter();

    onSelect(person:Person){
        this.selectedPerson.emit(person);
    }

    search(term: string):void{
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.persons = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? this.personService.searchPersons(term)
                : Observable.of<Person[]>([]))
            .catch(error => {
                return Observable.of<Person[]>([]);
            })
    }
}