import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public courseData = [
    {
      name: 'HTML',
      difficulties: ['Easy', 'Medium'],
      iconClass: 'fab fa-html5'
    },
    {
      name: 'CSS', 
      difficulties: ['Easy', 'Medium'],
      iconClass: 'fab fa-css3-alt'
    },
    {
      name: 'Javascript',
      difficulties: ['Easy', 'Medium'],
      iconClass: 'fab fa-js'
    }
  ]

  constructor(
    public auth: AuthService,
    public _snackBar: MatSnackBar,
    private quiz: QuizService
  ) { }

  public sub;

  ngOnInit(): void {
    this.sub = this.auth.user$.subscribe(user => {
      this.quiz.val = {
        answersArr: [],
        numOfQuestions: 0,
        questions: 0,
        user: user
      }
    })
  }

  showSnackbar(message: string, action: string) {
    if(this.auth.signedIn != true) {
      this._snackBar.open(message, action, {
        duration: 2000,
        panelClass: ['snackbar']
      })
    }
  }

}
