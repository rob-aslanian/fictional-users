import { IUser } from '../../core/models';
import {
  UserActionList,
  UserActions,
  UserState,
} from '../types/user.type';

const initialState: UserState = {
  users: new Map<string, IUser>(),
};

export default function userReducer(
  state = initialState,
  action: UserActions,
): UserState {
  const usersCopy = new Map<string, IUser>(state.users);

  switch (action.type) {
    case UserActionList.ADD_USER: {
      usersCopy.set(action.payload.id, action.payload);
      return {
        ...state,
        users: usersCopy,
      };
    }
    case UserActionList.EDIT_USER: {
      if (usersCopy.has(action.payload.id)) {
        usersCopy.set(action.payload.id, action.payload);
      }

      return {
        ...state,
        users: usersCopy,
      };
    }
    case UserActionList.DELETE_USER: {
      usersCopy.delete(action.payload);
      return {
        ...state,
        users: usersCopy,
      };
    }
    default:
      return state;
  }
}
