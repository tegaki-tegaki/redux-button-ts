import { AnyAction } from "redux";
import { Color } from "csstype";

export interface PayloadAction extends AnyAction {
    payload: any
}

export enum actions {
    PICK_COLOR = 'PICK_COLOR'
}

export const pickColor = (color: Color): PayloadAction => {
    return {
        type: actions.PICK_COLOR,
        payload: color
    }
}