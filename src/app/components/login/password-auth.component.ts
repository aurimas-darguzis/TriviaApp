
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

    mode: SignInMode;

    signupForm: FormGroup;
    signinForm: FormGroup;
    forgotPasswordForm: FormGroup;

    constructor(private fb: FormBuilder,
                private store: Store<AppStore>,
                private af: AngularFire,
                public dialogRef: MdDialogRef<PasswordAuthComponent>) {
        this.mode = SignInMode.signIn;
    }

    ngOnInit() {

    }
}

enum SignInMode {
    signIn,
    signUp,
    forgotPassword
}

function signupFormValidator(fg: FormGroup): {[key: string]: boolean} {
    // TODO: check if email is already taken

    // Password match validation
    if (fg.get('password').value !== fg.get('confirmPassword').value) {
        return  {'passwordmismatch': true };
    }

    return null;
}
