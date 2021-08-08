import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as FrogActions from '../frog.action';
import Frog from '../frog.model';
import FrogState from '../frog.state';

@Component({
  selector: 'frog-component',
  templateUrl: './frog.component.html',
  styleUrls: ['./frog.component.css']
})
export class FrogComponent implements OnInit {
  constructor(
    private store: Store<{ frogs: FrogState }>) {
    this.frog$ = store.pipe(select('frogs'));
  }

  ngOnInit() {
    this.FrogSubscription = this.frog$
      .pipe(
        map(x => {
          this.frogList = x.frogs;
          this.frogError = x.frogError;
        })
      )
      .subscribe();

    this.store.dispatch(FrogActions.BeginGetFrogAction());
  }

  frog$: Observable<FrogState>;
  FrogSubscription: Subscription;
  frogList: Frog[] = [];

  title: string = '';
  isCompleted: boolean = false;

  frogError: Error = null;

  createFrog() {
    const frog: Frog = { title: this.title, isCompleted: this.isCompleted };
    this.store.dispatch(FrogActions.BeginCreateFrogAction({ payload: frog }));
    this.title = '';
    this.isCompleted = false;
  }

  ngOnDestroy() {
    if (this.FrogSubscription) {
      this.FrogSubscription.unsubscribe();
    }
  }
}
