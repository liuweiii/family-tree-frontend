/**
 * Created by apple on 2017/2/12.
 */

import {Component, OnInit} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Person} from "../person";
import {PersonService} from "../person.service";
@Component({
    selector:"persons-search",
    moduleId:module.id,
    styleUrls: ["personsSearch.component.css"],
    templateUrl:"personsSearch.component.html",
    providers: [PersonService]
})
export class PersonsSearchComponent implements OnInit{
    persons: Observable<Person[]>;
    private searchTerms = new Subject<string>();

    constructor(private personService:PersonService){}

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