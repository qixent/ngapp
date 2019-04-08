import { Component, AfterViewInit } from '@angular/core';

import { interval, Observable, fromEvent } from 'rxjs';
// import { of } from 'rxjs/internal/observable/of';
// import { zip } from 'rxjs/internal/observable/zip';
 import { catchError, mergeMap, concatMap } from 'rxjs/operators';
 import { empty } from 'rxjs/internal/observable/empty';

 class Repo {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'ngapp';
  repoArray: Array<Repo>;

ngAfterViewInit() {
  const searchInput = document.getElementsByClassName('search-input')[0] as HTMLInputElement;

const inputSequence$ = fromEvent(
  searchInput,
  'keyup'
)
.pipe(mergeMap(keyup => performedRequst(searchInput.value)))
.subscribe(searchResult => {
    this.repoArray = searchResult.items;
         //console.log(searchResult.items[0]);
});

function performedRequst(search: string) {
     return fetch('https://api.github.com/search/repositories?sort=stars&order=desc&q=' + search)
         .then(res => res.json());
}

}

}
