import { Component, OnInit } from '@angular/core';
import questions from '../../../assets/questions.js';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service.js';
import { Question } from 'src/app/models/question.js';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  public categories = ['CSS', 'HTML', 'Javascript'];
  public allQuestions: any[] = [];
  public sliderValues = [0, 0, 0];
  public selectedQuestions: Question[] = [];
  public isQuizActive: boolean = false;

  constructor(private router: Router, public quizService: QuizService) { }

  ngOnInit(): void {
    this.allQuestions = questions;
  }

  takeQuiz(choice: string, index) {
    let diffNum = this.sliderValues[index];
    let diffLevel = diffNum < 0.5 ? 'easy' : 'medium';
    this.selectedQuestions = this.allQuestions[choice].filter(ques => {
      return ques.difficulty == diffLevel
    });
    this.isQuizActive = true;
  }
  
  cancelQuiz(event){
    this.isQuizActive = event;
  }
}
