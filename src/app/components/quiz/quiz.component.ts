import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Question } from 'src/app/models/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(public quizService: QuizService, private router: Router){};

  @Input() data: Question[] = [];

  public activeQuestion: Question;
  public activeQuestionIndex: number = 0;
  public numOfQuestions: number;
  public modalActive: boolean = false;
  public answersArr: boolean[] = [];

  ngOnInit(): void { 
    this.selectQuestion();
    this.numOfQuestions = this.data.length;
    this.answersArr = Array(this.numOfQuestions).fill(false);
  }
  selectQuestion() {
    if(this.numOfQuestions == this.activeQuestionIndex) {
      let dataObject = {
        numOfQuestions: this.numOfQuestions,
        answersArr: this.answersArr
      }
      this.quizService.val = dataObject;
      this.router.navigate(['/quiz-results']);
    } else {
      this.activeQuestion = this.data[this.activeQuestionIndex];
      this.activeQuestionIndex++; 
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
    
    if(this.activeQuestion.correctAnswer == ans) {
      this.answersArr[this.activeQuestionIndex - 1] = true;
    } else {
      this.answersArr[this.activeQuestionIndex - 1] = false;
    }
  }

}
