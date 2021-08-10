import React, { useState } from 'react';

import  DEFAULT_CSS_CLASS_PREFIX from './../../constants/default-css-class-prefix';

// NOTE: The `handleOutsideClick` implementation is necessary to handle Safari correctly (tested on v12)

export default function UijettosOptionsButton(
    {
        cssClassPrefix = DEFAULT_CSS_CLASS_PREFIX,
        label,
        options = [],
        open = false,
        whenClicked,
        whenOptionsTriggerClicked,
    }
) {
    const cssRootClass = `${cssClassPrefix}-options-button`;
    const [openState, setOpenState] = useState(open);

    return (
        <div
            className={cssRootClass}
        >
            <button
                className={`${cssRootClass}__main-button`}
                onBlur={() => setOpenState(false)}
                onClick={() => {
                    whenClicked();
                    setOpenState(false);
                }}
            >
                {label}
            </button>
            <button
                className={`${cssRootClass}__options-trigger`}
                onClick={
                    event => {
                        event.stopPropagation();
                        setOpenState(!openState);
                        whenOptionsTriggerClicked && whenOptionsTriggerClicked();
                    }
                }
            ></button>
            {
                openState && (<div
                    className={
                        [
                            `${cssRootClass}__options-list`,
                            (openState && `${cssRootClass}__options-list--open` || '')
                        ].join(' ')
                    }
                >
                    {
                        options.map(
                            ([label, whenClicked], i) => (
                                <button
                                    key={label}
                                    tabIndex="0"
                                    className={`${cssRootClass}__option`}
                                    onClick={
                                        event => {
                                            event.stopPropagation();
                                            whenClicked && whenClicked();
                                            setOpenState(false);
                                        }
                                    }
                                >
                                    {label}
                                </button>
                            )
                        )
                    }
                </div>)
            }
        </div>
    );
}
