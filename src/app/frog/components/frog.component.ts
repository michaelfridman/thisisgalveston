import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as FrogActions from '../frog.action';
import Frog from '../frog.model';
import FrogState from '../frog.state';

export interface SelectedFrog {
  id: Number;
  name: String;
}
@Component({
  selector: 'frog-component',
  templateUrl: './frog.component.html',
  styleUrls: ['./frog.component.css']
})
export class FrogComponent implements OnInit {

  @ViewChild('selectedFrog') selectedFrog: ElementRef;
  selectedFrogHtml: String = '<button>We are clicking on frog and looking for it to hop (animate) to the shopping basket. Lizards will crawl, etc ...  </button>';

  constructor(private store: Store<{ frogs: FrogState }>) {
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

  frogError: Error = null;
  selectedFrogs: any[] = [];
  showDescription: number = 0;
  createFrog() {
    console.error('TODO: implement createFrog')
    // const frog: Frog = { title: this.title, isCompleted: this.isCompleted };
    //   this.store.dispatch(FrogActions.BeginCreateFrogAction({ payload: frog }));
    //   this.title = '';
    //   this.isCompleted = false;
  }

  deSelect(that: SelectedFrog) {
    // both de and select are select, right?
    this.store.dispatch(FrogActions.BeginSelectFrogAction());
    for (var i = 0; i < this.selectedFrogs.length; i++) {
      if (this.selectedFrogs[i]['id'] === that.id) {
        this.selectedFrogs.splice(i, 1);
      }
    }
    console.log(this.selectedFrogs)
    this.store.dispatch(FrogActions.EndSelectFrogAction());
  }
  select(that: SelectedFrog) {
    console.log(that)
    this.store.dispatch(FrogActions.BeginSelectFrogAction());
    if (this.selectedFrogs.lastIndexOf(that) < 0) {
      this.selectedFrogs.push(that);
    } else {
      alert('Already got ' + that.name)
    }
    this.store.dispatch(FrogActions.EndSelectFrogAction());
  }
  ngOnDestroy() {
    if (this.FrogSubscription) {
      this.FrogSubscription.unsubscribe();
    }
  }
}
