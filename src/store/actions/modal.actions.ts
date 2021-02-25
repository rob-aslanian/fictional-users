import { ModalActionList, ModalActions } from '../types/modal.type';

export function closeModal(payload: boolean): ModalActions {
  return {
    type: ModalActionList.CLOSE_MODAL,
    payload,
  };
}
