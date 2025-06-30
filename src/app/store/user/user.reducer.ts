import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure, deleteUser } from './user.actions';
import { GridColumn, TeamMember } from '../../core/models/user.model';

export interface UserState {
  users: TeamMember[];
  columns: GridColumn[];
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  users: [],
  columns: [],
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { data }) => ({
    
    ...state,
    loading: false,
    users: data.grid_data,
    columns: data.grid_columns,
    error: null
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(deleteUser,(state,{userId})=>({
        ...state,
        users:state.users.filter((user) => user.id !== userId)
  }))
);
