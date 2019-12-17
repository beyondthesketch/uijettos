import React, { useState } from 'react';

import DEFAULT_CSS_CLASS_PREFIX from './../../constants/default-css-class-prefix';

export default function UijettosSpinBox(
    {
        initialValue = 0,
        min = undefined,
        max = undefined,
        cssClassPrefix = DEFAULT_CSS_CLASS_PREFIX,
        whenIncreased,
        whenDecreased,
        whenChanged
    }
) {
    const [value, setValue] = useState( initialValue);
    const cssRootClass = `${cssClassPrefix}-spin-box`;

    const increment = () => {
        if ((max !== undefined) && ((value + 1) > max)) {
            return null;
        }
        setValue(value + 1);
    }
    const decrement = () => {
        console.log('min', min, value);
        if ((min !== undefined) && ((value - 1) < min)) {
            return null;
        }
        setValue(value - 1);
    }

    return (
        <div
            className={cssRootClass}
        >
            <input
                className={ `${cssRootClass}__input` }
                value={ value }
                type="number"
                min={ min }
                max={ max }
                onChange={ (event) => {
                    console.log('val', event.target.value);
                    // whenChanged && whenChanged(value);
                    return setValue( parseInt(event.target.value, 10) );
                } }
            />
            <span
                className={ `${cssRootClass}__button ${cssRootClass}__button--decrease`}
                onClick={ () => {
                    decrement();
                    whenDecreased && whenDecreased(value);
                } }
            >Decrease</span>
            <span
                className={ `${cssRootClass}__button ${cssRootClass}__button--increase`}
                onClick={ () => {
                    increment();
                    whenIncreased && whenIncreased(value);
                } }
            >Increase</span>
        </div>
    );
}