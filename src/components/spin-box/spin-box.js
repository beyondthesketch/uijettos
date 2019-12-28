import React, { useState } from 'react';
import DEFAULT_CSS_CLASS_PREFIX from './../../constants/default-css-class-prefix';

const INPUT_NUMBER_TYPE = (function() {
    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    return input.type === 'number'
        ? true
        : false;
}());

export default function UijettosSpinBox(
    {
        initialValue = 0,
        min = undefined,
        max = undefined,
        allowEmpty = false,
        cssClassPrefix = DEFAULT_CSS_CLASS_PREFIX,
        whenIncreased,
        whenDecreased,
        whenChanged
    }
) {
    const KEYS = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        'Backspace',
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
    ];
    const [value, setValue] = useState( initialValue );
    const cssRootClass = `${cssClassPrefix}-spin-box`;
    const reachedMax = !!(max && (max !== undefined) && ((value + 1) > max));
    const reachedMin = !!(min && (min !== undefined) && ((value - 1) < min));

    const increment = () => {
        if (reachedMax) {
            return null;
        }
        const val = value + 1;
        (whenChanged && whenChanged(val));
        whenIncreased && whenIncreased(val);
        return setValue(val);
    };
    const decrement = () => {
        if (reachedMin) {
            return null;
        }
        const val = value - 1;
        (whenChanged && whenChanged(val));
        whenDecreased && whenDecreased(val);
        return setValue(val);
    };
    const inputChange = (event) => {
        let val = parseInt(event.target.value, 10) || undefined;

        // TODO: Rethink UX around entering numbers directly that are no in min/max range
        if (min && (val < min)) {
            val = min;
        }
        if (max && (val > max)) {
            val = max;
        }

        return (
            setValue(val),
            ((allowEmpty && whenChanged) || (val && whenChanged)) && whenChanged(val)
        );
    };

    return (
        <div
            className={cssRootClass}
        >
            <input
                className={ `${cssRootClass}__input` }
                value={ `${value}` }
                type="number"
                min={ min }
                max={ max }
                onKeyDown={
                    (event) => {
                        if (!KEYS.includes(event.key)) {
                            event.preventDefault();
                            return;
                        }
                        if (!INPUT_NUMBER_TYPE) {
                            if (event.key === 'ArrowUp') {
                                event.preventDefault();
                                increment();
                            }
                            if (event.key === 'ArrowDown') {
                                event.preventDefault();
                                decrement();
                            }
                        }
                    }
                }
                onChange={ inputChange }
                onBlur={
                    (event) => {
                        if (event.target.value === '') {
                            const val = min || 0;
                            setValue(val);
                            whenChanged && whenChanged(val);
                        }
                    }
                }
            />
            <span
                className={ `${cssRootClass}__button ${cssRootClass}__button--decrease${ reachedMin ? (' ' + cssRootClass + '__button--disabled') : '' }`}
                onClick={ decrement }
            >Decrease</span>
            <span
                className={ `${cssRootClass}__button ${cssRootClass}__button--increase${ reachedMax ? (' ' + cssRootClass + '__button--disabled') : '' }`}
                onClick={ increment }
            >Increase</span>
        </div>
    );
}