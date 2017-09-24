import { Observable } from 'rxjs/Rx';
import { HumanService } from '../../services/human.service';
import { IHuman } from '../../models/human.model';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class HomeResolver implements Resolve<IHuman[]> {
    constructor(private humanService: HumanService) { }

    resolve(): Observable<IHuman[]> {
        return this.humanService.getHumans();
    }
}
