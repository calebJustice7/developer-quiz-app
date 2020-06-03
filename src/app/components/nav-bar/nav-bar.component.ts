import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  public userName: string = '';
  public sub;

  constructor(
    public authService: AuthService,
    public _snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.sub = this.authService.user$.subscribe(user => {
      if(user != null) {
        this.userName = user.displayName;
        this.authService.signedIn = true;
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  showSnackbar(message: string, action: string) {
    if(this.authService.signedIn != true) {
      this._snackBar.open(message, action, {
        duration: 2000,
        verticalPosition: 'top'
      })
    }
  }

  navigateToStats(){
    this.router.navigate([`/stats/${this.userName}`])
  }
}
