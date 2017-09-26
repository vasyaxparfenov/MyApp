import {HumanService} from '../../services/human.service';
import { IHuman } from '../../models/human.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'create-human',
    templateUrl: './create-human.component.html',
    styleUrls: ['./create-human.component.css']
})

export class CreateHumanComponent implements OnInit {
    public name: FormControl;
    public age: FormControl;
    public humanFormGroup: FormGroup;
    public loading = true;
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
            Name : formValues.name,
            Age :  formValues.age
        };
        this.humanService.saveHuman(newHuman).subscribe(response => {
            this.loading = true;
            this.router.navigate(['/home']);
        });
    }
}
