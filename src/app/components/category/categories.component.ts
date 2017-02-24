import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from '../../store/app-store';
import { Category } from '../../model';
import { CategoryService } from '../../services';

@Component({
  selector: 'category-list',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categoriesObs: Observable<Category[]>;
  categories: Category[];
  sub: any;

  constructor(private store: Store<AppStore>) {
    this.categoriesObs = store.select(s => s.categories);
   }

  ngOnInit() {
    this.sub = this.categoriesObs.subscribe(categories => this.categories = categories);
    // this.sub = this.categoryService.getCategories()
    //               .subscribe(categories => this.categories = categories);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
