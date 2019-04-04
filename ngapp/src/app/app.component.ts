import { Component, AfterViewInit } from '@angular/core';

import { interval, Observable, fromEvent } from 'rxjs';
// import { of } from 'rxjs/internal/observable/of';
// import { zip } from 'rxjs/internal/observable/zip';
 import { catchError, mergeMap, concatMap } from 'rxjs/operators';
 import { empty } from 'rxjs/internal/observable/empty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ngapp';

ngAfterViewInit() {
  const searchInput = document.getElementsByClassName('search-input')[0] as HTMLInputElement;

const inputSequence$ = fromEvent(
  searchInput,
  'keyup'
)
.pipe(mergeMap(searchValue => performedRequst(searchValue)))
.subscribe(user => {
         console.log(user);
});

function performedRequst(search: string) {
     return fetch('https://api.github.com/users/' + search)
         .then(res => res.json());
}


}

}
