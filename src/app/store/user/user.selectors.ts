import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUsers = createSelector(selectUserState, state => state.users);
export const selectColumns = createSelector(selectUserState, state => state.columns);
export const selectLoading = createSelector(selectUserState, state => state.loading);
