import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { transition, trigger, state, animate, style } from '@angular/animations';

@Component({
  selector: 'app-custom-quiz',
  templateUrl: './custom-quiz.component.html',
  styleUrls: ['./custom-quiz.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class CustomQuizComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  inputsToShow: Boolean[] = [true, false, false, false];
  quizData = {
    name: '',
    topics: ['Example'],
    description: '',
    difficulty: '',
  }
  topic: string;

  addTopic():void {
    if(this.quizData.topics[0] == 'Example') {
      this.quizData.topics.splice(0, 1);
    }
    if(this.topic.length > 0) {
      this.quizData.topics.push(this.topic);
      this.topic = '';
    }
  }

  deleteTopic(topic): void {
    this.quizData.topics.splice(topic, 1);
  }

  switchToSecondInput(e):void{
    if(e.target.innerText == 'Cancel'){
      this.router.navigate(['/']);
    } else if(this.quizData.name.length > 1) {
      this.inputsToShow = [false, false, false, false];
      this.inputsToShow[1] = true;
    }
  }

  switchToThirdInput(e):void {
    if(e.target.innerText == 'Previous Step') {
      this.inputsToShow = [true, false, false, false];
    } else if(this.quizData.topics.length >= 1) {
      this.inputsToShow = [false, false, true, false];
    }
  }

  switchToFourthInput(e):void {
    if(e.target.innerText == 'Previous Step') {
      this.inputsToShow = [false, true, false, false];
    } else if(this.quizData.description.length > 1) {
      this.inputsToShow = [false, false, false, true];
    }
  }

  finalInput(e):void {
    if(e.target.innerText == 'Previous Step') {
      this.inputsToShow = [false, false, true, false];
    } else if(this.quizData.difficulty.length > 3) {
      
    }
  }
}
