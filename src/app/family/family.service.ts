/**
 * Created by apple on 2017/2/12.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Family} from "./family";

@Injectable()
export class FamilyService{
    private familiesUrl = 'http://127.0.0.1:8081/families/';
    constructor(private http: Http){
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getFamily(myId:string): Promise<Family>{
        return this.http.get(this.familiesUrl+myId)
            .toPromise()
            .then(response => response.json() as Family)
            .catch(this.handleError);
    }
}