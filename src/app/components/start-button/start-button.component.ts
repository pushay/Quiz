import { Component } from "@angular/core";
import { QuizService } from 'src/app/shared/quiz.service';

@Component({
    selector:'app-start-button',
    templateUrl:'./start-button.component.html'
})

export class StartButton {
    enableRouterLink:boolean = true;
    constructor(private quizService:QuizService){}

    startQuiz(){
        this.quizService.turnSlides()
    }
}