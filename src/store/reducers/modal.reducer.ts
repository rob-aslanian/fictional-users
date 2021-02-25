import {
  ModalActionList,
  ModalActions,
  ModalState,
} from '../types/modal.type';

const initialState: ModalState = {
  open: false,
};

export default function itemReducer(
  state = initialState,
  action: ModalActions,
): ModalState {
  switch (action.type) {
    case ModalActionList.CLOSE_MODAL: {
      return {
        ...state,
        open: action.payload,
      };
    }
    default:
      return state;
  }
}
