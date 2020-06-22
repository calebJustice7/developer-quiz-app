import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  public signedIn: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.signOut();
    this.signedIn = false;
    return this.router.navigate(['/']);
  }

  async updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`/users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      // photoUrl: user.photoUrl
    };

    this.signedIn = true;
    return userRef.set(data, { merge: true });
  }

  returnStats(id){
    return this.afs.collection('stats').doc(id).valueChanges();
  }

  saveStats(id, data) {
    const statsRef: AngularFirestoreDocument<any> = this.afs.doc(`stats/${id}`);
    statsRef.set(data);
  }

  saveNewQuiz(quiz, id) {
    const quizRef: AngularFirestoreDocument<any> = this.afs.doc(`gen-quizzes/${quiz.quizName}`);
    quizRef.set(quiz);
  }

  getQuizzes(){
    return this.afs.collection('gen-quizzes').valueChanges();
  }
}
