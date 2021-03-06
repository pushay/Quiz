import { Component, OnInit} from "@angular/core";
import { QuizService } from 'src/app/shared/quiz.service';
import {Router} from "@angular/router";

@Component({
    selector:'app-quiz-end',
    templateUrl:'./quiz-end.component.html'
})

export class QuizEndComponent implements OnInit {
    points:number;
    badNumber:boolean = true;

    constructor(private quizService:QuizService){}

    ngOnInit(){
        this.points = this.quizService.getPoints()
        if (this.points == 1) this.badNumber = false
    }

    startQuizAgain(){
        window.location.href = '/Quiz';
    }
}