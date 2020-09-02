import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { QuizService } from 'src/app/shared/quiz.service';
import { Subscription } from 'rxjs';

@Component({
    selector:'app-button',
    templateUrl:'./button.component.html'
})

export class ButtonComponent implements OnInit, OnDestroy {
    @Input()label:string;
    enableRouterLink:boolean = true;
    disabled:boolean;
    private subscription:Subscription

    constructor(private quizService:QuizService){}
   
    ngOnInit(){
        this.disabled =this.quizService.getStatusButton();
        this.subscription = this.quizService.disablingButtons.subscribe((status)=> {
            this.disabled = status;
        })
    }

    ngOnDestroy(){
        this.subscription.unsubscribe()
    }
}
