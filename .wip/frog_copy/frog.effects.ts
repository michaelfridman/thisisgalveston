import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as FrogActions from './frog.action';
import { FrogHttpService } from './frog.httpservice';
import Frog from './frog.model';

@Injectable()
export class FrogEffects {
  constructor(
    private hasuraService: FrogHttpService,
    private frogService: FrogHttpService,
    private action$: Actions
  ) { }

  GetFrogs$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(FrogActions.BeginGetFrogAction),
      mergeMap(action =>
        // this.frogService.getFrogs()
        this.hasuraService.getFrogs()
          .pipe(map((result: any) => result.data))
          .pipe(map((data: Frog[]) => {
            console.log(data);
            return FrogActions.SuccessGetFrogAction({ payload: data });
          }),
            catchError((error: Error) => { return of(FrogActions.ErrorFrogAction(error)); })
          )
      )
    )
  );

  CreateFrogs$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(FrogActions.BeginCreateFrogAction),
      mergeMap((action: any) => {
        console.log(action);
        return this.hasuraService.createFrogs(action.payload).pipe(
          map((data: Frog) => { return FrogActions.SuccessCreateFrogAction({ payload: data }); }),
          catchError((error: Error) => { return of(FrogActions.ErrorFrogAction(error)); })
        )
      }
      )
    )
  );
}
