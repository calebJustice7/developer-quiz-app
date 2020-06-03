import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Question } from 'src/app/models/question';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { interval } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {

  constructor(public quizService: QuizService, private router: Router, private auth: AuthService){};

  @Input() data: Question[] = [];

  public activeQuestion: Question;
  public activeQuestionIndex: number = 0;
  public numOfQuestions: number;
  public modalActive: boolean = false;
  public answersArr: boolean[] = [];
  public sub;
  private userData: User;
  public timer;
  public timerSub;
  public answered: boolean = false;
  public times = {
    ms: 0,
    s: 0,
    m: 0
  }

  ngOnInit(): void { 
    this.answered = true;
    this.data = this.shuffleArr(this.data);
    this.timer = interval(10);
    this.timerSub = this.timer.subscribe(time => {
      this.times.ms++;
      if(this.times.ms == 100) {
        this.times.ms = 0;
        this.times.s++;
      }
      if(this.times.s == 60) {
        this.times.s = 0;
        this.times.m++;
      }
    })

    this.selectQuestion();
    this.numOfQuestions = this.data.length;
    this.answersArr = Array(this.numOfQuestions).fill(false);
    this.activeQuestion.answers.forEach(ans => ans.selected = false);
    this.sub = this.auth.user$.subscribe(user => {
      this.userData = user;
    })
  }

  shuffleArr(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
  
      while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.timerSub.unsubscribe();
  }
  selectQuestion() {
    if(this.numOfQuestions == this.activeQuestionIndex) {
      let dataObject = {
        numOfQuestions: this.numOfQuestions,
        answersArr: this.answersArr,
        questions: this.data,
        user: this.userData,
        time: this.times
      }
      this.quizService.val = dataObject;
      this.router.navigate(['/quiz-results']);
    } else {
      if(this.answered) {
        this.activeQuestion = this.data[this.activeQuestionIndex];
        this.activeQuestionIndex++; 
        this.activeQuestion.answers.forEach(ans => ans.selected = false);
        this.activeQuestion.answers = this.shuffleArr(this.activeQuestion.answers);
        this.answered = false;
      }
    }
  }
  showModal() {
    this.modalActive = true;
  }
  hideModal() {
    this.modalActive = false;
  }

  @Output() quitEvent = new EventEmitter();

  quitQuiz() {
    this.quitEvent.emit(false);
  }

  selectAnswer(ans: string, index) {
    this.answered = true;
    this.activeQuestion.answers.forEach(ans => ans.selected = false);
    this.activeQuestion.answers[index].selected = true;
    if(this.activeQuestion.correctAnswer == ans) {
      this.answersArr[this.activeQuestionIndex - 1] = true;
    } else {
      this.answersArr[this.activeQuestionIndex - 1] = false;
    }
  }

}
