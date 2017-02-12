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

    myCharts: any;

    //TODO 为了响应myCharts里的click事件，将本对象存储成了全局的，这是有问题的。待解决
    static component:FamilyDetailComponent;

    ngOnInit(): void {
        this.myCharts = my.init(document.getElementById("myCharts"));
        FamilyDetailComponent.component = this;
        this.myCharts.on('click', function (params:any) {
            // params.data.component.reload(params.data.person);
            FamilyDetailComponent.component.reload(params.data.person);
        });
        if(this.me) {
            this.reload(this.me);
        }
    }

    reload(me:Person): void {
        this.me = me;
        this.familyService.getFamily(this.me.id)
            .then(family => {
                this.family = family;
                this.myCharts.setOption(FamilyDetailOption.generateOption(me, family));
            });
    }
}