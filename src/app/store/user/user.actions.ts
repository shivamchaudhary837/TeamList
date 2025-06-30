import { createAction, props } from '@ngrx/store';
import { ApiResponse } from '../../core/models/user.model';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ data: ApiResponse }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: string }>());

export const deleteUser= createAction('[User] Delete User', props<{ userId: string}>());
