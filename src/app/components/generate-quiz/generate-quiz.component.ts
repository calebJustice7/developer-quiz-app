import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-generate-quiz',
  templateUrl: './generate-quiz.component.html',
  styleUrls: ['./generate-quiz.component.scss']
})
export class GenerateQuizComponent implements OnInit, OnDestroy {

  constructor(private quizService: QuizService, private authService: AuthService, public _snackBar: MatSnackBar) { }

  public sliderValue: number;
  public quizName: string;
  public languages = [
    {language: 'Javascript', selected: false},
    {language: 'CSS', selected: false},
    {language: 'HTML', selected: false}
  ];
  public filterByLanguages: any[] = [];
  public difficulties = [
    {name: 'easy', selected: false},
    {name: 'medium', selected: false}
  ];
  public filterByDifficulty: any[] = [];
  public sub;
  public userName: string;
  public id;
  public max: any = 1;
  public includeDuplicates: boolean = false;

  ngOnInit(): void {
    this.sub = this.authService.user$.subscribe(user => {
      if(user != null) {
        this.userName = user.displayName;
        this.id = user.uid;
      }
    })
  }
  ngOnDestroy(){ 
    this.sub.unsubscribe();
  }

  getMax(getCurrent?){
    if(!this.includeDuplicates) {
      this.max = 1;
      this.max = this.quizService.getPossibleNumOfQuestions(this.filterByDifficulty, this.filterByLanguages, true);
    }
    if(getCurrent) {
      return this.quizService.getPossibleNumOfQuestions(this.filterByDifficulty, this.filterByLanguages, true);
    }
  }

  onDuplicateChange() {
    this.includeDuplicates = !this.includeDuplicates;
    if(this.includeDuplicates) {
      this.max = 100;
    } else this.getMax();
    this.sliderValue = 0;
  }

  updateDifficulties(diff) {
    let idx = this.difficulties.findIndex(dif => dif.name == diff.name);
    let rightDiff = this.difficulties[idx].selected;
    if(rightDiff == false) {
      this.difficulties[idx].selected = true;
      this.filterByDifficulty.push(diff.name);
    } else {
      this.difficulties[idx].selected = false;
      this.filterByDifficulty.splice(this.filterByDifficulty.indexOf(diff.name), 1);
    }
    this.getMax();
  }

  updateLanguages(langE) {
    let idx = this.languages.findIndex(lang => lang.language == langE.language);
    let rightLang = this.languages[idx].selected;
    if(rightLang == false) {
      this.languages[idx].selected = true;
      this.filterByLanguages.push(langE.language);
    } else {
      this.languages[idx].selected = false;
      this.filterByLanguages.splice(this.filterByLanguages.indexOf(langE.language), 1);
    }
    this.getMax();
  }

  saveQuiz(){
    if(this.quizName != undefined && (this.sliderValue > 1) && this.filterByDifficulty.length > 0 && this.filterByLanguages.length > 0) {
      let newQuiz = this.quizService.generateQuestions(this.quizName, this.sliderValue, this.filterByDifficulty, this.filterByLanguages, this.userName, this.includeDuplicates);
      this.authService.saveNewQuiz(newQuiz, this.id);
      this._snackBar.open('Quiz created!', 'close', {
        duration: 2000,
        panelClass: ['snackbar']
      });
      this.quizName = '';
      this.sliderValue = 1;
    } else {
      this._snackBar.open('Something went wrong!', 'close', {
        duration: 2000,
        panelClass: ['snackbar']
      })
    }
  }
}
