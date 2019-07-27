import { Reducer } from "redux";
import { Color } from "csstype";

import { actions, PayloadAction } from "./actions";

export interface MyState {
    backgroundColor: Color
}

export const reducer: Reducer<any, PayloadAction> = (state, action) => {
    switch (action.type) {
        case actions.PICK_COLOR:
            return { ...state, backgroundColor: action.payload }
        default:
            return state
    }
}