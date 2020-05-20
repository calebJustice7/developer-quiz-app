import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Question } from 'src/app/models/question';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

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

  ngOnInit(): void { 
    this.selectQuestion();
    this.numOfQuestions = this.data.length;
    this.answersArr = Array(this.numOfQuestions).fill(false);
    this.activeQuestion.answers.forEach(ans => ans.selected = false);
    this.sub = this.auth.user$.subscribe(user => {
      this.userData = user;
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  selectQuestion() {
    if(this.numOfQuestions == this.activeQuestionIndex) {
      let dataObject = {
        numOfQuestions: this.numOfQuestions,
        answersArr: this.answersArr,
        questions: this.data,
        user: this.userData
      }
      this.quizService.val = dataObject;
      this.router.navigate(['/quiz-results']);
    } else {
      this.activeQuestion = this.data[this.activeQuestionIndex];
      this.activeQuestionIndex++; 
      this.activeQuestion.answers.forEach(ans => ans.selected = false);
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
    this.activeQuestion.answers.forEach(ans => ans.selected = false);
    this.activeQuestion.answers[index].selected = true;
    if(this.activeQuestion.correctAnswer == ans) {
      this.answersArr[this.activeQuestionIndex - 1] = true;
    } else {
      this.answersArr[this.activeQuestionIndex - 1] = false;
    }
  }

}
