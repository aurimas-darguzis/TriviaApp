import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppStore } from '../../store/app-store';
import { CategoryActions, TagActions, QuestionActions } from '../../store/actions';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'trivia app!';
  sub: any;

  constructor(private categoryActions: CategoryActions,
              private tagActions: TagActions,
              private questionActions: QuestionActions,
              private store: Store<AppStore>,
              private router: Router,
              private snackBar: MdSnackBar) {

    this.sub = store.select(s => s.questionSaveStatus)
                    .subscribe((status) => {
                      if (status === 'SUCCESS') {
                        this.snackBar.open('Question saved!', '', { duration: 2000 });
                      }
                      if (status === 'IN PROGRESS') {
                        this.router.navigate(['/questions']);
                      }
                    })
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
}
