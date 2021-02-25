import { IUser } from '../../core/models';

export interface UserState {
  users: Map<string, IUser>;
}

export enum UserActionList {
  ADD_USER = '[USER] ADD_USER',
  EDIT_USER = '[USER] EDIT_USER',
  DELETE_USER = '[USER] DELETE_USER',
}

interface AddUserAction {
  type: typeof UserActionList.ADD_USER;
  payload: IUser;
}

interface EditUserAction {
  type: typeof UserActionList.EDIT_USER;
  payload: IUser;
}

interface DeleteUserAction {
  type: typeof UserActionList.DELETE_USER;
  payload: string;
}

export type UserActions =
  | AddUserAction
  | EditUserAction
  | DeleteUserAction;
