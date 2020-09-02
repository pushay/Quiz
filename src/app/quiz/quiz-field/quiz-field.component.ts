import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { QuizService } from 'src/app/shared/quiz.service';

@Component({
    selector:'app-quiz-field',
    templateUrl:'./quiz-field.component.html'
})

export class QuizFieldComponent implements AfterViewInit {
    @ViewChild('field',{static:false})field;
    constructor(private quizService:QuizService){}

    ngAfterViewInit(){
        this.quizService.passReference(this.field);
    }
}