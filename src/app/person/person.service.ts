/**
 * Created by apple on 2017/2/9.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Person} from "./person";
import 'rxjs/add/operator/toPromise';
import {Paginate} from "../common/paginate";

@Injectable()
export class PersonService{
    private personsUrl = 'http://192.168.1.119:8081/persons/';
    private personsSearchUrl = 'http://192.168.1.119:8081/persons/search?';

    private DEFAULT_PAGE_SIZE=5;

    constructor(private http: Http){
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    searchPersons(name:string, pageIndex:number):Promise<Paginate<Person>>{
        return this.http.get(this.personsSearchUrl+"name="+name
        +"&pageSize="+this.DEFAULT_PAGE_SIZE
        +"&pageIndex="+pageIndex)
            .toPromise()
            .then(response => {
                return response.json() as Paginate<Person>;
            })
            .catch(this.handleError);
    }

    getPersons(): Promise<Person[]>{
        return this.http.get(this.personsUrl)
            .toPromise()
            .then(response => response.json() as Person[])
            .catch(this.handleError);
    }
}