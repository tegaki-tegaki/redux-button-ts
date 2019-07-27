import React from 'react';
import { connect } from "react-redux";
import { Dispatch, Component, MouseEvent as ReactMouseEvent } from "react";

import { PayloadAction, pickColor } from "./actions";
import { MyState } from "./reducers";
import { Color } from 'csstype';

interface Props {
    backgroundColor: Color,
    onChooseColor: (event: ReactMouseEvent<HTMLInputElement, MouseEvent>) => void
}

class MainInternal extends Component<Props> {
    render = () => {

        const css = {
            backgroundColor: this.props.backgroundColor,
        }

        return (
            <div className="App" >
                <header className="App-header">
                    <div style={css}>backgroundcolor</div>
                    <input type="color" onClick={this.props.onChooseColor} />
                </header>
            </div>
        )
    }
}

const mapStateToProps = (state: MyState) => {
    if (state) {
        return {
            backgroundColor: state.backgroundColor
        };
    }
    return {
        backgroundColor: 'red',
    }
}

const mapDisptachToProps = (dispatch: Dispatch<PayloadAction>) => {
    return {
        onChooseColor: (event: ReactMouseEvent<HTMLInputElement, MouseEvent>) => {
            dispatch(pickColor((event.target as HTMLInputElement).value));
        }
    }
}

export const Main = connect(mapStateToProps, mapDisptachToProps)(MainInternal);

