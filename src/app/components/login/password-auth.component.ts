
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import * as firebase from 'firebase';
import { AngularFire, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from '../../store/app-store';

const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
    selector: 'login',
    templateUrl: './password-auth.component.html',
    styleUrls: ['./password-auth.component.scss']
})
export class PasswordAuthComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.log('this is the day when I commit only once :)')
    }
}
