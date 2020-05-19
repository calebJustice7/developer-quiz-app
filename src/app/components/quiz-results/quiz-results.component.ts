import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent implements OnInit {

  constructor(public quizService: QuizService) { }

  public quizInfo;

  ngOnInit(): void {
    this.quizInfo = this.quizService.val;
    console.log(this.quizInfo);
  }

}
