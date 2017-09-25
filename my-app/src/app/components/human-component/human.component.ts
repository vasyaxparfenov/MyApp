import { IHuman } from '../../models/human.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'human-thumbnail',
    templateUrl: './human.component.html',
    styleUrls: ['./human.component.css']
})

export class HumanComponent implements OnInit {
    @Input() public human: IHuman;
    constructor() { }

    ngOnInit() {
        console.log(this.human);
    }
}