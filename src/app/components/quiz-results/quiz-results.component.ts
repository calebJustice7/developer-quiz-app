import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent implements OnInit, OnDestroy {

  constructor(public quizService: QuizService, private auth: AuthService, private router: Router) { }

  public quizInfo;
  public questionResults = {
    score: 0,
    numRight: 0,
    numWrong: 0
  };
  public sub;
  public alreadySavedToDb: boolean = false;

  ngOnInit(): void {
    if(this.quizService.val == undefined) {
      this.router.navigate(['/quizzes'])
    } else {
      this.quizInfo = this.quizService.val;
      this.getData();
    }
  }

  ngOnDestroy() {
    if(this.sub != undefined) this.sub.unsubscribe();
  }

  navigateToStats(){
    this.router.navigate([`/stats/${this.quizInfo.user.displayName}`])
  }

  getData(){
    this.quizInfo.answersArr.forEach(ans => {
      if(ans == true) this.questionResults.numRight++;
      else if(ans == false) this.questionResults.numWrong++;
    })
    this.questionResults.score = this.questionResults.numRight / this.quizInfo.numOfQuestions; 

    this.saveToDb();
  }

  saveToDb() {
    this.sub = this.auth.returnStats(this.quizInfo.user.uid).subscribe(stats => {
      if(!this.alreadySavedToDb) {
        if(stats != undefined) {
          const newData = this.updateStats(stats);
          this.auth.saveStats(this.quizInfo.user.uid, newData);
          this.alreadySavedToDb = true;
        } else if (stats == undefined) {
          const data = {
            quizzesTaken: 0,
            scores: {
              htmlScores: {numRight: 0, totalQuestions: 0},
              cssScores: {numRight: 0, totalQuestions: 0},
              JsScores: {numRight: 0, totalQuestions: 0}
            },
            htmlQuizzesTaken: 0,
            cssQuizzesTaken: 0,
            JsQuizzesTaken: 0
          }
          const newData = this.updateStats(data);
          this.auth.saveStats(this.quizInfo.user.uid, newData);
          this.alreadySavedToDb = true;
        }
      }
    })
  }

  updateStats(data) {
    let newData = data;
    data.quizzesTaken++;
    if(this.quizInfo.questions[0].questionCategory == 'css'){
      newData.cssQuizzesTaken++;
      newData.scores.cssScores.numRight += this.questionResults.numRight;
      newData.scores.cssScores.totalQuestions += (this.questionResults.numRight + this.questionResults.numWrong);
    } else if(this.quizInfo.questions[0].questionCategory == 'html') {
      newData.htmlQuizzesTaken++;
      newData.scores.htmlScores.numRight += this.questionResults.numRight;
      newData.scores.htmlScores.totalQuestions += (this.questionResults.numRight + this.questionResults.numWrong)
    } else if(this.quizInfo.questions[0].questionCategory == 'javascript') {
      newData.JsQuizzesTaken++;
      newData.scores.JsScores.numRight += this.questionResults.numRight;
      newData.scores.JsScores.totalQuestions += (this.questionResults.numRight + this.questionResults.numWrong)
    }
    return newData;
  }
}
