import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Question } from 'src/app/models/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-questions',
  templateUrl: './review-questions.component.html',
  styleUrls: ['./review-questions.component.scss']
})
export class ReviewQuestionsComponent implements OnInit {

  constructor(public quizService: QuizService, private router: Router) { }

  public questions: Question[] = [];
  public activeQuestion: Question;
  public activeQuestionIndex = 0;
  public modalActive: boolean = false;

  ngOnInit(): void {
    if(this.quizService.val == undefined) {
      this.router.navigate(['/quizzes'])
    } else {
      this.questions = this.quizService.val.questions;
      this.activeQuestion = this.questions[this.activeQuestionIndex];
    }
  }

  nextQuestion() {
    if(this.activeQuestionIndex + 1 == this.questions.length) return;
    else {
      this.activeQuestionIndex++;
      this.activeQuestion = this.questions[this.activeQuestionIndex];
    }
  }

  hideModal() {
    this.modalActive = false;
  }
  showModal(){
    this.modalActive = true;
  }

  quitReview() {
    this.router.navigate(['/quizzes']);
  }

  previousQuestion(){
    if(this.activeQuestionIndex == 0) return;
    else {
      this.activeQuestionIndex--;
      this.activeQuestion = this.questions[this.activeQuestionIndex];
    }
  }

}
