/**
 * Created by apple on 2017/2/11.
 */

import {Component, OnInit, Input} from "@angular/core";

import * as my from '../../echarts/echarts'
import {DetailOption} from "./detail.option";
import {Person} from "../../person/person";
import {FamilyService} from "../family.service";

@Component({
    moduleId: module.id,
    selector: 'family-detail',
    templateUrl: 'detail.component.html',
    styleUrls: ['detail.component.css',]
})
export class DetailComponent implements OnInit {
    @Input()
    me: Person;

    constructor(private familyService: FamilyService) {
    }

    myCharts: any;

    static component: DetailComponent;

    addEventListeners(){
        this.myCharts.on('click', function (params: any) {
            DetailComponent.component.reload(params.data.person);
        });
    }

    ngOnInit(): void {
        this.myCharts = my.init(document.getElementById("myCharts"));

        DetailComponent.component = this;

        this.addEventListeners();

        if (this.me) {
            this.reload(this.me);
        }
    }

    reload(me: Person): void {
        this.me = me;
        this.familyService.getFamily(this.me.id)
            .then(family => {
                this.myCharts.setOption(DetailOption.generateOption(me, family));
            });
    }
}