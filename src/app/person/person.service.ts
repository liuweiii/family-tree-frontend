/**
 * Created by apple on 2017/2/9.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Person} from "./person";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonService{
    private personsUrl = 'http://127.0.0.1:8081/persons/';
    constructor(private http: Http){
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getPersons(): Promise<Person[]>{
        return this.http.get(this.personsUrl)
            .toPromise()
            .then(response => response.json() as Person[])
            .catch(this.handleError);
    }
}