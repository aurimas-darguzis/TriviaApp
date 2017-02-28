import { Category, Question, User } from '../model';

import { categories, tags, questions, questionSaveStatus } from './reducers';

import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

export interface AppStore {
    user: User;
    categories: Category[];
    categoryDictionary: {[key: number]: Category}
    tags: string[];
    questions: Question[];
    questionSaveStatus: string;
}

export default compose(combineReducers)({
    user: User,
    categories: categories,
    tags: tags,
    questions: questions,
    questionSaveStatus: questionSaveStatus
})