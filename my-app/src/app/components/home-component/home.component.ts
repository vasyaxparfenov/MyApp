import { ActivatedRoute} from '@angular/router';
import { IHuman } from '../../models/human.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    humans: IHuman[];
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.humans = this.activatedRoute.snapshot.data['humans'];
     }
}
