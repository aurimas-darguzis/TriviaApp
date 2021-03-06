import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AppStore } from '../../store/app-store';

// import { TagService } from '../../services/tag.service';

@Component({
  selector: 'tag-list',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit, OnDestroy {
  tagsObs: Observable<string[]>;
  tags: string[];
  sub: any;

  constructor(private store: Store<AppStore>) {
    this.tagsObs = store.select(s => s.tags);
   }

  ngOnInit() {
    this.sub = this.tagsObs.subscribe(tags => this.tags = tags);
    // this.tagService.getTags().subscribe(tags => this.tags = tags);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
