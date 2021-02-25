import { IUser } from '../../core/models';
import { UserActionList, UserActions } from '../types/user.type';

export function addUser(user: IUser): UserActions {
  return {
    type: UserActionList.ADD_USER,
    payload: user,
  };
}

export function editUser(user: IUser): UserActions {
  return {
    type: UserActionList.EDIT_USER,
    payload: user,
  };
}

export function removeUser(payload: string): UserActions {
  return {
    type: UserActionList.DELETE_USER,
    payload,
  };
}
