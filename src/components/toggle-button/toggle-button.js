import React, { useState } from 'react';

import DEFAULT_CSS_CLASS_PREFIX from './../../constants/default-css-class-prefix';

export default function UijettosToggleButton(
    {
        cssClassPrefix = DEFAULT_CSS_CLASS_PREFIX,
        labelOff = 'off',
        labelOn = 'on',
        initialState = false,
        whenClicked,
    }
) {
    const cssRootClass = `${cssClassPrefix}-toggle-button`;
    const [buttonState, setButtonState] = useState( initialState );
    return (
        <button
            className={cssRootClass + (buttonState ? ` ${cssRootClass}--on` : '')}
            onClick={ () => {
                const newState = !buttonState;
                whenClicked && whenClicked( newState );
                return setButtonState( newState );
            } }
        >

            <span
                className={`${cssRootClass}__label` + (buttonState ? ` ${cssRootClass}__label--on` : '')}
            >
                {(buttonState ? labelOn : labelOff )}
            </span>
        </button>
    );
}
