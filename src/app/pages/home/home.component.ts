/**
 * Created by apple on 2017/3/1.
 */
import {Component, ViewChild} from '@angular/core'
import {DetailComponent} from "../../family/detail/detail.component";
import {ListComponent} from "../../person/list/list.component";
import {Person} from "../../person/person";

@Component({
    moduleId:module.id,
    selector:'home',
    templateUrl:'home.component.html',
    styleUrls:['home.component.css']
})
export class HomeComponent{

    @ViewChild(ListComponent) personList:ListComponent;
    @ViewChild(DetailComponent) familyDetail:DetailComponent;

    selectedPerson:Person;

    showDetail(person:Person){
        this.selectedPerson = person;
        // if(this.familyDetail) {
            this.familyDetail.reload(person);
        // }
    }

}