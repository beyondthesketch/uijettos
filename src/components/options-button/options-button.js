import React, { useState } from 'react';

import  DEFAULT_CSS_CLASS_PREFIX from './../../constants/default-css-class-prefix';

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
    const [timeoutId, setTimeoutId] = useState(null);
    const [openState, setOpenState] = useState(open);

    return (
        <div
            className={cssRootClass}
            onBlur={() => {
                setTimeoutId(
                    setTimeout(() => setOpenState(false))
                );
            }}
            onFocus={() => {
                clearTimeout(timeoutId);
            }}
        >
            <button
                className={`${cssRootClass}__main-button`}
                tabIndex="0"
                onClick={() => {
                    whenClicked();
                    setOpenState(false);
                }}
            >
                {label}
            </button>
            <button
                className={`${cssRootClass}__options-trigger`}
                tabIndex="0"
                onClick={
                    event => {
                        event.stopPropagation();
                        event.target.focus();
                        setOpenState(!openState);
                        whenOptionsTriggerClicked && whenOptionsTriggerClicked();
                    }
                }
                aria-haspopup="true"
                aria-expanded={openState}
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
