/**
 * Created by apple on 2017/2/11.
 */

import {Component, OnInit} from "@angular/core";
import {Person} from "../person";
import {PersonService} from "../person.service";
import * as my from '../../echarts/echarts'

@Component({
    moduleId: module.id,
    selector: 'personsMap',
    templateUrl: 'personsMap.component.html',
    // styleUrls: ['personsMap.component.css',]
})
export class PersonsMapComponent implements OnInit {
    persons: Person[];

    constructor(private personService: PersonService) {
    }


    ngOnInit(): void {

        let mychart = my.init(document.getElementById("echart"));

        mychart.setOption({
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });

        this.personService.getPersons()
            .then(persons => {
                this.persons = persons
            });
    }
}