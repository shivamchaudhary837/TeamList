import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../core/services/api.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './user.actions';

@Injectable()
export class UserEffects {
  private readonly actions$ = inject(Actions);
  private readonly api = inject(ApiService);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.api.fetchTeamData().pipe(
          map(data => {
             console.log("api check",data);
             return loadUsersSuccess({ data })
          }),
          catchError(error => of(loadUsersFailure({ error: error.message || 'Error' })))
        )
      )
    )
  );
}
