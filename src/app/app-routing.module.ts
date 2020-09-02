import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import {QuizStartComponent} from './quiz/quiz-start/quiz-start.component'
import { QuizEndComponent } from './quiz/quiz-end/quiz-end.component';

const routes:Routes = [
    {path:'', component:QuizStartComponent},
    {path:'quiz', component:QuizComponent},
    {path:'summary', component:QuizEndComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}