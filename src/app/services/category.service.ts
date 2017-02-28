import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Category } from '../model/category';

@Injectable()
export class CategoryService {

  constructor(private af: AngularFire) { }

  getCategories(): Observable<Category[]> {
    return this.af.database.list('/categories');
  }

}
