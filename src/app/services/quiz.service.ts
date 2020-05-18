import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(){};

  public quizName: string | undefined = undefined;

  selectQuiz(quiz: string) {
    this.quizName = quiz;
  }

  deSelectQuiz(){
    this.quizName = undefined;
  }

}
