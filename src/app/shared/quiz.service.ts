import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import {Subject} from 'rxjs';
import { Quiz } from './quiz.model';
import { Router } from '@angular/router';


@Injectable({
    providedIn:'root'
})

export class QuizService {
    result:string;
    points:number = 0;
    sentAnswears:Array<string>;
    sentImage:string;
    number:number = 0;
    changingImages = new Subject<string>();
    changingAnswears = new Subject<Array<string>>();
    disablingButtons = new Subject<boolean>();
    ButtonsStatus:boolean = false;
    containerReference;
    buttonReference;
    private renderer:Renderer2;

    constructor(private router:Router, rendererFactory:RendererFactory2){
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    quiz:Quiz[] = [
            {image:'./assets/agra.jpg', answears:['Agra', 'Sofia Synagogue', 'Holy thrinity cathedral'], goodAnswear:'Agra'},
            {image:'./assets/amsterdam.jpg', answears:['Paris', 'Berlin', 'Amsterdam'],  goodAnswear:'Amsterdam'},
            {image:'./assets/copenhagen.jpg', answears:['Oslo', 'Stockholm', 'Copenhagen'],  goodAnswear:'Copenhagen'},
            {image:'./assets/cuba.jpg', answears:['Italy', 'Spain', 'Cuba'], goodAnswear:'Cuba'},
            {image:'./assets/dubrovnik.jpg', answears:['Barcelona', 'Dubrovnik', 'Republic of Malta'], goodAnswear:'Dubrovnik'},
            {image:'./assets/hamburg.jpg', answears:['Hamburg', 'Amsterdam', 'Vienna'], goodAnswear:'Hamburg'},
            {image:'./assets/nyc.jpg', answears:['Tokyo', 'New York', 'London'], goodAnswear:'New York'},
            {image:'./assets/london.jpg', answears:['Berlin', 'London', 'Paris'], goodAnswear:'London'},
            {image:'./assets/monaco.jpg', answears:['Monaco', 'Marseille', 'València'], goodAnswear:'Monaco'},
            {image:'./assets/poland.jpg', answears:['Warsaw', 'Poznań', 'Kraków'],  goodAnswear:'Warsaw'},
            {image:'./assets/osaka.jpg', answears:['Beijing', 'Osaka', 'Hiroshima'],  goodAnswear:'Osaka'}, 
            {image:'./assets/spain.jpg', answears:['Madrid', 'Barcelona', 'Lisbon'],  goodAnswear:'Barcelona'},
            {image:'./assets/switzerland.jpg', answears:['Switzerland', 'Poland', 'Austria'],  goodAnswear:'Switzerland'},
            {image:'./assets/venice.jpg', answears:['Venice', 'Athens', 'Gdańsk'],  goodAnswear:'Venice'},
    ]
 
    getImage(){
        return this.sentImage
    }

    giveAnswears(){
        return this.sentAnswears
    }

    getPoints(){
        return this.points
    }

    getAnswear(answear:string){
        if (answear == this.quiz[this.number].goodAnswear){
            this.points = this.points + 1;
            this.result = 'good';
        }

        if (answear !== this.quiz[this.number].goodAnswear){
            this.result = 'bad';
        }

        if (this.number>12) {
            this.router.navigate(['summary']);
            return;
        }

        this.disablingButtons.next(true);
        this.showEffects()
        setTimeout(()=> {
            this.disablingButtons.next(false);
            this.turnSlides(),
            this.renderer.setStyle(this.containerReference.nativeElement, 'background-color', 'rgb(233, 150, 68, 0.7)')}, 4500);
            this.number ++;
            return this.points
    }
    showEffects(){
        let audio = new Audio();
        if (this.result == 'bad') {
            this.renderer.setStyle(this.containerReference.nativeElement, 'background-color', 'rgb(220, 90, 75, 0.7)');
            audio.src = "./assets/wrong.mp3";
        }
        if (this.result == 'good'){
            this.renderer.setStyle(this.containerReference.nativeElement, 'background-color', 'rgb(117, 220, 138, 0.7)');
            audio.src = "./assets/correct.mp3";
        }
        audio.load();
        audio.play();
    }


    passReference(reference:any){
        if ( reference.nativeElement.className == 'quiz-field') {
            this.containerReference = reference;
        }
    }

    updateInfo(){
        this.changingImages.next(this.sentImage);
        this.changingAnswears.next(this.sentAnswears);
    }

    getStatusButton(){
        return this.ButtonsStatus
    }

    turnSlides(){
        if (this.quiz) {
            this.sentAnswears = this.quiz[this.number].answears;
            this.sentImage = this.quiz[this.number].image;
            this.updateInfo();
        }
        return null
    }
}