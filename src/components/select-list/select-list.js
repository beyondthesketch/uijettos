import React from 'react';

import DEFAULT_CSS_CLASS_PREFIX from './../../constants/default-css-class-prefix';

export const UijettosControlledSelectList = (
    {
        selected,
        cssClassPrefix = DEFAULT_CSS_CLASS_PREFIX,
        whenChanged,
        children
    }
) => {
    const cssRootClass = `${cssClassPrefix}-select-list`;

    return (
        <div className={cssRootClass}>
            <ul
                className={`${cssRootClass}__options-list`}
                data-selected={selected}
                onClick={whenChanged}
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

export default class UijettosSelectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(event) {
        let node = event.target;
        while (node !== event.currentTarget && !node.dataset.value) {
            node = node.parentNode;
        }
        if (node.dataset.value) {
            const val = node.dataset.value;
            if (this.state.selected !== val) {
                this.setState({
                    selected: val
                }, () => this.props.whenChanged && typeof this.props.whenChanged === 'function' && this.props.whenChanged(this.state.selected))
            }
        }
    }

    componentDidMount() {
        if (
            this.props
            && !this.props.selected
            && this.props.children
            && this.props.children.length
        ) {
            this.setState(
                {
                    selected: this.props.children[0].props['data-value']
                }
            );
        }
    }

    render() {
        return <UijettosControlledSelectList
            cssClassPrefix={this.props.cssClassPrefix}
            selected={this.state.selected}
            whenChanged={this.handleSelect}
        >{ this.props.children }</UijettosControlledSelectList>
    }
}