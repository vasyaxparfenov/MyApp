import { IHuman } from '../models/human.model';
import { HttpErrorHandlerService } from './httpErrorHandler.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class HumanService {
    humans: IHuman[];
    constructor(private http: Http, @Inject('API') private api: string, private httpErrorHandler: HttpErrorHandlerService) {

     }
    getHumans(): Observable<IHuman[]> {
        return this.http.get(`${this.api}/humans`)
            .do(response => this.humans = <IHuman[]>response.json())
            .map((response: Response) => <IHuman[]>response.json())
            .catch(this.httpErrorHandler.handleError);
    }
    saveHuman(humanToSave: IHuman): Observable<Response> {
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this.http.post(`${this.api}/humans`, JSON.stringify(humanToSave), options)
            .do(response => this.humans.push(humanToSave))
            .catch(this.httpErrorHandler.handleError);
    }
}
