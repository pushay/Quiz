import { Component, OnInit, OnDestroy } from "@angular/core";
import { QuizService } from 'src/app/shared/quiz.service';
import { Subscription } from 'rxjs';


@Component({
    selector:'app-quiz-field-answears',
    templateUrl:'./quiz-field-answears.component.html'
})

export class QuizFieldAnswears implements OnInit, OnDestroy {
    answears:Array<string>;
    private subscription:Subscription;

    constructor(private quizService:QuizService){}

    ngOnInit(){
        this.answears = this.quizService.giveAnswears();
        this.subscription = this.quizService.changingAnswears.subscribe((sentAnswears)=> {
            this.answears = sentAnswears;
        })
    }
    
    getPoint(answear:string){
        this.quizService.getAnswear(answear);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}