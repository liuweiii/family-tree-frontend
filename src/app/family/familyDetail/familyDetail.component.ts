/**
 * Created by apple on 2017/2/11.
 */

import {Component, OnInit, Input} from "@angular/core";

import * as my from '../../echarts/echarts'
import {FamilyDetailOption} from "./familyDetail.option";
import {Person} from "../../person/person";
import {Family} from "../family";
import {FamilyService} from "../family.service";

@Component({
    moduleId: module.id,
    selector: 'familyDetail',
    templateUrl: 'familyDetail.component.html',
    // styleUrls: ['familyDetail.component.css',]
})
export class FamilyDetailComponent implements OnInit {
    @Input()
    me: Person;
    family: Family;

    constructor(private familyService: FamilyService) {
    }

    personsOption: {};
    myCharts: any;

    ngOnInit(): void {
        this.myCharts = my.init(document.getElementById("myCharts"));
        if(this.me) {
            this.reload(this.me);
        }
    }

    reload(me:Person): void {
        this.me = me;
        this.familyService.getFamily(this.me.id)
            .then(family => {
                this.family = family;
                this.personsOption = FamilyDetailOption.generateOption(this.me, this.family);
                this.myCharts.setOption(this.personsOption);

            });
    }
}