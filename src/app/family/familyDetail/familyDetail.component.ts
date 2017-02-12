/**
 * Created by apple on 2017/2/11.
 */

import {Component, OnInit, Input} from "@angular/core";

import * as my from '../../echarts/echarts'
import {FamilyDetailOption} from "./familyDetail.option";
import {Person} from "../../person/person";
import {PersonService} from "../../person/person.service";

@Component({
    moduleId: module.id,
    selector: 'familyDetail',
    templateUrl: 'familyDetail.component.html',
    // styleUrls: ['familyDetail.component.css',]
})
export class FamilyDetailComponent implements OnInit {
    @Input()
    me: Person;
    persons: Person[];

    constructor(private personService: PersonService) {
    }

    personsOption: {};
    myCharts: any;

    ngOnInit(): void {
        this.myCharts = my.init(document.getElementById("myCharts"));
        this.reload();
    }

    reload(): void {
        this.personService.getPersons()
            .then(persons => {
                this.persons = persons;
                this.personsOption = FamilyDetailOption.generateOption(this.me, persons);
                this.myCharts.setOption(this.personsOption);

            });
    }
}