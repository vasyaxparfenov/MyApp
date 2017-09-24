import { IHuman } from '../models/human.model';
import { HttpErrorHandlerService } from './httpErrorHandler.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HumanService {
    constructor(private http: Http, @Inject('API') private api: string, private httpErrorHandler: HttpErrorHandlerService) { }
    getHumans(): Observable<IHuman[]> {
        return this.http.get(`${this.api}/humans`)
            .map((response: Response) => response.json() as IHuman[] )
            .catch(this.httpErrorHandler.handleError);
    }
}