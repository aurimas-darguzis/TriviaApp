import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.route';
import { AppComponent, CategoriesComponent, TagsComponent, QuestionsComponent } from './components';
import { CategoryService, TagService, QuestionService } from './services';
import { QuestionAddUpdateComponent } from './components/question/question-add-update.component';

@NgModule({
  declarations: [
    AppComponent, CategoriesComponent, TagsComponent, QuestionsComponent, QuestionAddUpdateComponent
  ],
  imports: [
    BrowserModule,
    // Router
    RouterModule.forRoot(routes),
    // Material
    MaterialModule.forRoot(),
    // Flex
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CategoryService, TagService, QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
