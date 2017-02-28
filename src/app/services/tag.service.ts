import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Injectable()
export class TagService {

  constructor(private af: AngularFire) { }

  getTags(): Observable<string[]> {
    return this.af.database.list('/tagList').map(t => t.map(a => a['$value']));
  }
}
