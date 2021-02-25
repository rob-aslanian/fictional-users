import { IItem } from '../../core/models';

export interface ItemState {
  items: Map<string, IItem>;
}

export enum ItemActionList {
  ADD_ITEM = '[ITEM] ADD_ITEM',
  EDIT_ITEM = '[ITEM] EDIT_ITEM',
  DELETE_ITEM = '[ITEM] DELETE_ITEM',
}

interface AddItemAction {
  type: typeof ItemActionList.ADD_ITEM;
  payload: IItem;
}

interface EditItemAction {
  type: typeof ItemActionList.EDIT_ITEM;
  payload: IItem;
}

interface DeleteItemAction {
  type: typeof ItemActionList.DELETE_ITEM;
  payload: string;
}

export type ItemActions =
  | AddItemAction
  | EditItemAction
  | DeleteItemAction;
