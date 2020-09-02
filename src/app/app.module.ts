import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { QuizComponent } from './quiz/quiz.component';
import {QuizStartComponent} from './quiz/quiz-start/quiz-start.component';
import { HeaderComponent } from './layout/header/header.component';
import { QuizImageComponent } from './quiz/quiz-image/quiz-image.component';
import { QuizFieldComponent } from './quiz/quiz-field/quiz-field.component';
import { QuizFieldAnswears } from './quiz/quiz-field/quiz-field-answears/quiz-field-answears.component';
import { QuizFieldQuestion } from './quiz/quiz-field/quiz-field-question/quiz-field-question.component';
import { StartButton } from './components/start-button/start-button.component';
import { QuizService } from './shared/quiz.service';
import { QuizEndComponent } from './quiz/quiz-end/quiz-end.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizStartComponent,
    ButtonComponent,
    StartButton,
    QuizComponent,
    HeaderComponent,
    QuizImageComponent,
    QuizFieldComponent,
    QuizFieldAnswears,
    QuizFieldQuestion,
    QuizComponent,
    QuizEndComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
