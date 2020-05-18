import { Component, OnInit } from '@angular/core';
import questions from '../../../assets/questions.js';
import { QuizService } from 'src/app/services/quiz.service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  public categories = ['CSS', 'HTML', 'Javascript'];
  public allQuestions: any[] = [];
  public selectedQuestions: any[] = [];
  public sliderValues = [0, 0, 0]

  constructor(
    private router: Router,
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
    console.log(questions);
    this.allQuestions = questions;
  }

  changeSlider() {}

  chooseQuiz(choice: string) {
    this.quizService.selectQuiz(choice);
    this.router.navigate([`/quiz/${choice}`]);
  }
}
