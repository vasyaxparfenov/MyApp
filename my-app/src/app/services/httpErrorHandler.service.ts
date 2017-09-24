import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpErrorHandlerService {
    handleError(error: Response){
        console.log(error.statusText);
        return Observable.throw(error.status);
    }
}