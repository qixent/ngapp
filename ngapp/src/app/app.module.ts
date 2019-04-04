import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { interval, Observable, fromEvent } from 'rxjs';
// import { of } from 'rxjs/internal/observable/of';
// import { zip } from 'rxjs/internal/observable/zip';
 import { catchError, mergeMap } from 'rxjs/operators';
 import { empty } from 'rxjs/internal/observable/empty';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const searchInput = document.getElementsByClassName('search-input')[0] as HTMLInputElement;

const inputSequence$ = fromEvent(
  searchInput,
  'keyup'
)
.pipe(mergeMap(_keyup => performedRequst()))
.subscribe(user => {
         console.log(user.email);
});

function performedRequst() {
     return fetch('https://jsonplaceholder.typicode.com/users/1')
         .then(res => res.json());
}

/*

class User{
  email: string;
}*/