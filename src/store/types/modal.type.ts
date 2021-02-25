export interface ModalState {
  open: boolean;
}

export enum ModalActionList {
  CLOSE_MODAL = '[MODAL] CLOSE_MODAL',
}

interface CloseModalAction {
  type: typeof ModalActionList.CLOSE_MODAL;
  payload: boolean;
}

export type ModalActions = CloseModalAction;
