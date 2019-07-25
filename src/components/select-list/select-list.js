import React, { useState } from 'react';

import DEFAULT_CSS_CLASS_PREFIX from './../../constants/default-css-class-prefix';

export default function UijettosSelectList(
    {
        initialSelected,
        cssClassPrefix = DEFAULT_CSS_CLASS_PREFIX,
        whenChanged,
        children
    }
) {
    const [selected, setSelected] = useState( initialSelected || children && children.length && children[0].props['data-value'])
    const cssRootClass = `${cssClassPrefix}-select-list`;

    const handleSelect = (event) => {
        let node = event.target;
        while (node !== event.currentTarget && !node.dataset.value) {
            node = node.parentNode;
        }
        if (node.dataset.value) {
            const val = node.dataset.value;
            if (selected !== val) {
                whenChanged && whenChanged(val);
                return setSelected( val );
            }
        }
    }

    return (
        <div className={cssRootClass}>
            <ul
                className={`${cssRootClass}__options-list`}
                data-selected={selected}
                onClick={handleSelect}
            >
                {
                    React.Children.map(
                        children,
                        child => React.cloneElement(child, {
                            className: `${cssRootClass}__option` +
                            (child.props['data-value'] === selected
                                ?
                                ` ${cssRootClass}__option--selected`
                                :
                                ''
                            )
                        })
                        
                    )
                }
            </ul>
        </div>
    );
}