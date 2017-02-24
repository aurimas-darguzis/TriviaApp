import { arrayify } from 'tslint/lib/utils';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

import { Category, Question, Answer } from '../../model';
import { CategoryService, TagService, QuestionService } from '../../services';

@Component({
  selector: 'app-question-add-update',
  templateUrl: './question-add-update.component.html',
  styleUrls: ['./question-add-update.component.scss']
})
export class QuestionAddUpdateComponent implements OnInit {

  // Properties
  categories: Category[];
  sub: any;

  tags: string[];
  sub2: any;

  questionForm: FormGroup;
  question: Question;

  autoTags: string[] = []; // auto computed based on match within Q/A
  enteredTags: string[] = [];

  get answers(): FormArray {
    return this.questionForm.get('answers') as FormArray;
  }

  get tagsArray(): FormArray {
    return this.questionForm.get('tagsArray') as FormArray;
  }

  constructor(private fb: FormBuilder,
              private router: Router,
              private categoryService: CategoryService,
              private tagService: TagService,
              private questionService: QuestionService) { }

  ngOnInit() {
    this.question = new Question();
    this.createForm(this.question);
  }

  createForm(question: Question) {
    const fgs: FormGroup[] = question.answers.map(answer => {
      const fg = new FormGroup({
        answerText: new FormControl(answer.answerText, Validators.required),
        correct: new FormControl(answer.correct),
      });
      return fg;
    });
    const answersFA = new FormArray(fgs);

    let fcs: FormControl[] = question.tags.map(tag => {
      const fc = new FormControl(tag);
      return fc;
    });
    if (fcs.length === 0) {
      fcs = [new FormControl('')];
    }
    const tagsFA = new FormArray(fcs);

    this.questionForm = this.fb.group({
      category: [(question.categories.length > 0 ? question.categories[0] : '' ), Validators.required],
      questionText: [question.questionText, Validators.required],
      tags: '',
      tagsArray: tagsFA,
      answers: answersFA
      // ordered: [question.ordered],
      // explanation: [question.explanation]
      }  //{validator: questionFormValidator }
    );
  }

}

// Custom Validators
function questionFormValidator(fg: FormGroup): {[key: string]: boolean} {
  const answers: Answer[] = fg.get('answer').value;
  if (answers.filter(answer => answer.correct).length !== 1) {
    return { 'correctAnswerCountInvalid' : true }
  }

  const tags: string[] = fg.get('tagsArray').value;
  if (tags.length < 3) {
    return { 'tagCountInvalid': true }
  }

  return null;
}
