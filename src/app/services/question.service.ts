import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';

import { Question, Category } from '../model';
import { CategoryService } from './category.service';

@Injectable()
export class QuestionService {
  private _serviceUrl = 'http://localhost:3000/questions';

  constructor(private http: Http) { }

  getQuestions(): Observable<Question[]> {
    const url = this._serviceUrl;

    return this.http.get(url).map(res => res.json());
  }

  saveQuestion(question: Question): Observable<Question> {
    const url = this._serviceUrl;

    return this.http.post(url, question)
                .map(res => res.json());
  }
}
