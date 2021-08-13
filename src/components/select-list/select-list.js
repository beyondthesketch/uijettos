import React, { useState } from 'react';

import DEFAULT_CSS_CLASS_PREFIX from './../../constants/default-css-class-prefix';

export default function UijettosSelectList(
    {
        initialSelected,
        selected,
        cssClassPrefix = DEFAULT_CSS_CLASS_PREFIX,
        whenChanged,
        children
    }
) {
    const [selectedItem, setSelectedItem] = useState( initialSelected || children && children.length && children[0].props['data-value'])
    const cssRootClass = `${cssClassPrefix}-select-list`;
    
    const usedSelected = (typeof selected !== 'undefined') ? selected : selectedItem;

    const handleSelect = (event) => {
        let node = event.target;
        while (node !== event.currentTarget && !node.dataset.value) {
            node = node.parentNode;
        }
        if (node.dataset.value) {
            const val = node.dataset.value;
            if (usedSelected !== val) {
                whenChanged && whenChanged(val);
                return (typeof selected !== 'undefined') ? val : setSelectedItem( val );
            }
        }
    }

    return (
        <div className={cssRootClass}>
            <ul
                className={`${cssRootClass}__options-list`}
                data-selected={usedSelected}
                onClick={handleSelect}
            >
                {
                    React.Children.map(
                        children,
                        child => React.cloneElement(child, {
                            className: `${cssRootClass}__option` +
                            (child.props['data-value'] === usedSelected
                                ?
                                ` ${cssRootClass}__option--selected`
                                :
                                ''
                            ),
                            tabIndex: child.props['data-value'] === usedSelected ? undefined : 0,
                            onKeyPress: (event) => {
                                event.preventDefault();
                                event.target.click();
                            }
                        })
                    )
                }
            </ul>
        </div>
    );
}