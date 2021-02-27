import React, { useState } from 'react';

import DEFAULT_CSS_CLASS_PREFIX from './../../constants/default-css-class-prefix';

export default function UijettosToggleButton(
    {
        cssClassPrefix = DEFAULT_CSS_CLASS_PREFIX,
        labelOff = 'off',
        labelOn = 'on',
        initialState = false,
        state,
        disabled = false,
        whenClicked,
    }
) {
    const cssRootClass = `${cssClassPrefix}-toggle-button`;
    const [buttonState, setButtonState] = useState( initialState );
    
    const usedState = (typeof state !== 'undefined') ? state : buttonState;

    return (
        <button
            className={cssRootClass + (usedState ? ` ${cssRootClass}--on` : '') + (disabled ? ` ${cssRootClass}--disabled` : '')}
            disabled={ disabled }
            onClick={ () => {
                const newState = !usedState;
                whenClicked && whenClicked( newState );
                return (typeof state !== 'undefined') ? newState : setButtonState( newState );
            } }
        >

            <span
                className={`${cssRootClass}__label` + (usedState ? ` ${cssRootClass}__label--on` : '')}
            >
                {(usedState ? labelOn : labelOff )}
            </span>
        </button>
    );
}
