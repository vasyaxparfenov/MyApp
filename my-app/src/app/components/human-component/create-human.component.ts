import {HumanService} from '../../services/human.service';
import { IHuman } from '../../models/human.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'create-human',
    templateUrl: './create-human.component.html',
    styles: [`
        em { float:right; color:#E05C65; padding-left:10px;}
        .error input, .error select, .error textarea {background-color:#E3C3C5;}
        .error ::-webkit-input-placeholder {color: #999}
        .error ::-moz-placeholder  {color: #999}
        .error :-moz-placeholder  {color: #999}
        .error :ms-input-placeholder  {color: #999}
    `]
})

export class CreateHumanComponent implements OnInit {
    public name: FormControl;
    public age: FormControl;
    public humanFormGroup: FormGroup;
    constructor(private humanService: HumanService, private router: Router) {

    }

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.age = new FormControl('', Validators.required);
        this.humanFormGroup = new FormGroup({
            name: this.name,
            age: this.age
        }, Validators.required);
    }
    saveHuman(formValues) {
        const newHuman: IHuman = {
            Id : this.humanService.humans.length.toString(),
            Name : formValues.name,
            Age :  formValues.age
        };
        this.humanService.saveHuman(newHuman).subscribe(response => {
            this.router.navigate(['/home']);
        });
    }
}
