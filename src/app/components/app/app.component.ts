import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppStore } from '../../store/app-store';
import { CategoryActions, TagActions, QuestionActions } from '../../store/actions';
import { MdSnackBar } from '@angular/material';
import { AuthenticationService } from '../../services';
import { User } from '../../model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'trivia app!';
  sub: any;

  user: User;
  sub2: any;

  constructor(private categoryActions: CategoryActions,
              private tagActions: TagActions,
              private questionActions: QuestionActions,
              private store: Store<AppStore>,
              private router: Router,
              private snackBar: MdSnackBar,
              private authService: AuthenticationService) {

    this.sub = store.select(s => s.questionSaveStatus)
                    .subscribe((status) => {
                      if (status === 'SUCCESS') {
                        this.snackBar.open('Question saved!', '', { duration: 2000 });
                      }
                      if (status === 'IN PROGRESS') {
                        this.router.navigate(['/questions']);
                      }
                    });

    this.sub2 = store.select(s => s.user).subscribe(user => 
                this.user = user
                if (user) {
                  let url: string;
                  this.store.take(1).subscribe(s => url = s.loginRedirectUrl);
                  if (url) {
                    this.router.navigate([url]);
                  }
                });
              }

  ngOnInit() {
    this.store.dispatch(this.categoryActions.loadCategories());
    this.store.dispatch(this.tagActions.loadTags());
    this.store.dispatch(this.questionActions.loadQuestions());
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  login() {
    this.authService.ensureLogin();
  }

  logout() {
    this.authService.logout();
  }
}
