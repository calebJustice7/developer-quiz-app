import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { QuizService } from 'src/app/services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit, OnDestroy {

  constructor(private auth: AuthService, public quizService: QuizService, private router: Router) { }

  public sub;
  public stats;
  public displayContent: boolean = false;
  public averages = [
    { average: 0, name: 'All Quizzes' },
    { average: 0, name: 'CSS' },
    { average: 0, name: 'HTML' },
    { average: 0, name: 'Javascript' }
  ]

  ngOnInit(): void {
    if(this.quizService.val == undefined) this.router.navigate(['/sign-in']);
    else {
      this.sub = this.auth.returnStats(this.quizService.val.user.uid).subscribe(stats => {
        this.stats = stats;
        this.displayContent = true;
        this.getAverages();
      })
    }
  }

  getAverages(){
    const ref = this.stats.scores;
    if(ref.cssScores.numRight > 0)this.averages[1].average = ref.cssScores.numRight / ref.cssScores.totalQuestions;
    if(ref.htmlScores.numRight > 0)this.averages[2].average = ref.htmlScores.numRight / ref.htmlScores.totalQuestions;
    if(ref.JsScores.numRight > 0)this.averages[3].average = ref.JsScores.numRight / ref.JsScores.totalQuestions;

    this.averages[0].average = (this.averages[1].average + this.averages[2].average + this.averages[3].average) / 3;
  }

  ngOnDestroy() {
    if(this.quizService.val != undefined) this.sub.unsubscribe();
  }

}
