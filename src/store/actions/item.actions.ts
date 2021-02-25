import { IItem } from '../../core/models';
import { ItemActionList, ItemActions } from '../types/item.type';

export function addItem(item: IItem): ItemActions {
  return {
    type: ItemActionList.ADD_ITEM,
    payload: item,
  };
}

export function editItem(item: IItem): ItemActions {
  return {
    type: ItemActionList.EDIT_ITEM,
    payload: item,
  };
}

export function removeItem(payload: string): ItemActions {
  return {
    type: ItemActionList.DELETE_ITEM,
    payload,
  };
}
