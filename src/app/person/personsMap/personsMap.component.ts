/**
 * Created by apple on 2017/2/11.
 */

import {Component, OnInit, Input} from "@angular/core";
import {Person} from "../person";
import {PersonService} from "../person.service";
import * as my from '../../echarts/echarts'
import {PersonsMapOption} from "./personsMap.option";

@Component({
    moduleId: module.id,
    selector: 'personsMap',
    templateUrl: 'personsMap.component.html',
    // styleUrls: ['personsMap.component.css',]
})
export class PersonsMapComponent implements OnInit {
    @Input()
    me: Person;
    persons: Person[];

    constructor(private personService: PersonService) {
    }

    personsOption:{};
    myCharts:any;

    ngOnInit(): void {
        this.myCharts = my.init(document.getElementById("myCharts"));
        this.personService.getPersons()
            .then(persons => {
                this.persons = persons;
                this.personsOption = PersonsMapOption.generateOption(this.me,persons);
                this.myCharts.setOption(this.personsOption);

            });
    }
}