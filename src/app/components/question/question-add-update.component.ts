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



  constructor() { }

  ngOnInit() {
  }

}
