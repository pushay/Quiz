import { Component, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";
import { QuizService } from 'src/app/shared/quiz.service';
import { Subscription } from 'rxjs';



@Component({
    selector:'app-quiz-image',
    templateUrl:'./quiz-image.component.html'
})

export class QuizImageComponent implements OnInit, OnDestroy  {
    image:string;
    number:number;
    @ViewChild('container', {static:false})container;
    private subscription:Subscription;
    constructor(private quizService:QuizService, private renderer:Renderer2){}

    ngOnInit(){
       this.image = this.quizService.getImage();
       this.subscription = this.quizService.changingImages.subscribe((sentImage:string)=> {
           this.image = sentImage;
           this.changeImage()
       })
    }

    changeImage() {
        if (this.image && this.container !== '')
            this.renderer.setStyle(this.container.nativeElement, 'background-image', `url(${this.image})`);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe()
    }
}