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
        initialValue = '0',
        min = undefined,
        max = undefined,
        step = 1,
        allowEmpty = false,
        autoWidth = false,
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
        '.',
        'Backspace',
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
    ];
    const [value, setValue] = useState( initialValue );
    const cssRootClass = `${cssClassPrefix}-spin-box`;
    const newValue = parseFloat(value);
    const reachedMax = !!max && ((newValue + 0.1) > max);
    const reachedMin = !!min && ((newValue - 0.1) < min);

    const increment = (event) => {
        if (reachedMax) {
            return null;
        }
        const shift = event.shiftKey;
        const newVal = (newValue * 10 + (shift ? 0.1 : step) * 10) / 10;
        const val =  max && newVal > max ? max : newVal;
        (whenChanged && whenChanged(val));
        whenIncreased && whenIncreased(val);
        return setValue(val.toString());
    };
    const decrement = (event) => {
        if (reachedMin) {
            return null;
        }
        const shift = event.shiftKey;
        const newVal = (newValue * 10 - (shift ? 0.1 : step) * 10) / 10;
        const val = min && newVal < min ? min : newVal;
        (whenChanged && whenChanged(val));
        whenDecreased && whenDecreased(val);
        return setValue(val.toString());
    };
    const inputChange = (event) => {
        const stringValue = event.target.value;
        let val = parseFloat(stringValue) || undefined;
        console.log(stringValue.endsWith('.'), val);

        // TODO: Rethink UX around entering numbers directly that are no in min/max range
        if (min && (val < min)) {
            val = min;
        }
        if (max && (val > max)) {
            val = max;
        }

        return (
            setValue(
                val === undefined
                    ?
                    ''
                    :
                    stringValue.endsWith('.') && val !== undefined
                        ?
                        stringValue
                        :
                        val.toString()
            ),
            ((allowEmpty && whenChanged) || (val && whenChanged)) && whenChanged(val)
        );
    };
    const calculateMinWidthOfInput = () => value.length + 1;

    return (
        <div
            className={cssRootClass}
        >
            <input
                className={ `${cssRootClass}__input` }
                style={
                    autoWidth
                    ?
                    ({
                        width: `${calculateMinWidthOfInput()}ch`,
                        minWidth: `${calculateMinWidthOfInput()}ch`
                    })
                    :
                    null
                }
                value={ `${value}` }
                type="number"
                step={ step }
                min={ min }
                max={ max }
                onKeyDown={
                    (event) => {
                        if (!KEYS.includes(event.key) || ((value && value.includes && value.includes('.')) && (event.key === '.'))) {
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
                        else if (event.target.value.endsWith('.')) {
                            const val = parseFloat(event.target.value);
                            const newVal = max && (val < max)
                                ?
                                val
                                :
                                max || 0;
                            setValue(newVal);
                            whenChanged && whenChanged(newVal);
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