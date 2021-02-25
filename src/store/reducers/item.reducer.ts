import { IItem } from '../../core/models';
import {
  ItemActionList,
  ItemActions,
  ItemState,
} from '../types/item.type';

const initialState: ItemState = {
  items: new Map<string, IItem>(),
};

export default function itemReducer(
  state = initialState,
  action: ItemActions,
): ItemState {
  const itemsCopy = new Map<string, IItem>(state.items);

  switch (action.type) {
    case ItemActionList.ADD_ITEM: {
      itemsCopy.set(action.payload.id, action.payload);

      return {
        ...state,
        items: itemsCopy,
      };
    }
    case ItemActionList.EDIT_ITEM: {
      if (itemsCopy.has(action.payload.id)) {
        itemsCopy.set(action.payload.id, action.payload);
      }

      return {
        ...state,
        items: itemsCopy,
      };
    }
    case ItemActionList.DELETE_ITEM: {
      itemsCopy.delete(action.payload);
      return {
        ...state,
        items: itemsCopy,
      };
    }
    default:
      return state;
  }
}
