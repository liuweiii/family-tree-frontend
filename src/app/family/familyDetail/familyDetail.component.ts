/**
 * Created by apple on 2017/2/11.
 */

import {Component, OnInit, Input} from "@angular/core";

import * as my from '../../echarts/echarts'
import {FamilyDetailOption} from "./familyDetail.option";
import {Person} from "../../person/person";
import {FamilyService} from "../family.service";

@Component({
    moduleId: module.id,
    selector: 'familyDetail',
    templateUrl: 'familyDetail.component.html',
    styleUrls: ['familyDetail.component.css',]
})
export class FamilyDetailComponent implements OnInit {
    @Input()
    me: Person;

    constructor(private familyService: FamilyService) {
    }

    myCharts: any;

    static component: FamilyDetailComponent;

    addEventListeners(){
        this.myCharts.on('click', function (params: any) {
            FamilyDetailComponent.component.reload(params.data.person);
        });
    }

    ngOnInit(): void {
        this.myCharts = my.init(document.getElementById("myCharts"));

        FamilyDetailComponent.component = this;

        this.addEventListeners();

        if (this.me) {
            this.reload(this.me);
        }
    }

    reload(me: Person): void {
        this.me = me;
        this.familyService.getFamily(this.me.id)
            .then(family => {
                this.myCharts.setOption(FamilyDetailOption.generateOption(me, family));
            });
    }
}