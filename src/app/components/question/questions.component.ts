import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from '../../store/app-store';
import { Question, Category } from '../../model';
// import { QuestionService } from '../../services';

// import { Category } from '../../model';
// import { CategoryService } from '../../services/';

@Component({
  selector: 'question-list',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {
  questionObs: Observable<Question[]>;
  questions: Question[];
  categoryDictObs: Observable<{[key: number]: Category}>;
  categoryDictionary: {[key: number]: Category};
  sub: any;
  sub2: any;

  constructor(private store: Store<AppStore>) {
    this.questionObs = store.select(s => s.questions);
    this.categoryDictObs = store.select(s => s.categoryDictionary);
   }

  ngOnInit() {
    this.sub = this.questionObs.subscribe(questions => this.questions = questions);
    this.sub2 = this.categoryDictObs.subscribe(cd => this.categoryDictionary = cd);
    // this.questionService.getQuestions().subscribe(questions => this.questions = questions);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    } else if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }

}
