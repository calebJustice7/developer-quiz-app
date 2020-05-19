import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public userName: string = '';

  constructor(
    public authService: AuthService,
    public _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if(user != null) {
        this.userName = user.displayName;
        this.authService.signedIn = true;
      }
    })
  }

  showSnackbar(message: string, action: string) {
    if(this.authService.signedIn != true) {
      this._snackBar.open(message, action, {
        duration: 2000,
        verticalPosition: 'top'
      })
    }
  }
}
