import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-community-quizzes',
  templateUrl: './community-quizzes.component.html',
  styleUrls: ['./community-quizzes.component.scss']
})
export class CommunityQuizzesComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public quizzes;
  public isQuizActive: boolean = false;
  public questionsToSend: any[] = [];

  ngOnInit(): void {
    this.authService.getQuizzes().subscribe(quiz => {
      this.quizzes = quiz;
    })
  }

  takeQuiz(quiz) {
    this.questionsToSend = quiz.questions;
    this.isQuizActive = true;
  }

  cancelQuiz(event) {
    this.isQuizActive = event;
    this.questionsToSend = [];
  }

}
