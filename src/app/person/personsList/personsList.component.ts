/**
 * Created by apple on 2017/2/9.
 */

import {Component, OnInit} from "@angular/core";
import {Person} from "../person";
import {PersonService} from "../person.service";
@Component({
    moduleId: module.id,
    selector: 'personsList',
    templateUrl: 'personsList.component.html',
    styleUrls: ['personsList.component.css',]
})
export class PersonsListComponent implements OnInit {
    persons: Person[];

    constructor(private personService: PersonService) {
    }

    ngOnInit(): void {
        this.personService.getPersons()
            .then(persons =>
            {
                this.persons = persons
            });
    }
}