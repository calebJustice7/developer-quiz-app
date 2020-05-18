import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

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
    public _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
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
