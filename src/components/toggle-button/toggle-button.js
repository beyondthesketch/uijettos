import React from 'react';

import DEFAULT_CSS_CLASS_PREFIX from './../../constants/default-css-class-prefix';

export const UijettosControlledToggleButton = (
    {
        cssClassPrefix = DEFAULT_CSS_CLASS_PREFIX,
        status,
        labelOn,
        labelOff,
        whenClicked
    }
) => {
    const cssRootClass = `${cssClassPrefix}-toggle-button`;
    return (
        <button
            className={cssRootClass + (status ? ` ${cssRootClass}--on` : '')}
            onClick={whenClicked}
        >
            <span
                className={`${cssRootClass}__label` + (status ? ` ${cssRootClass}__label--on` : '')}
            >
                {(status ? labelOn || 'on' : labelOff || 'off')}
            </span>
        </button>
    )
}

export default class UijettosToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            on: this.props.initial || false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            on: !prevState.on
        }), () => this.props.whenClicked && typeof this.props.whenClicked === 'function' && this.props.whenClicked(this.state.on));
    }

    render() {
        return <UijettosControlledToggleButton
            cssClassPrefix={this.props.cssClassPrefix}
            labelOn={this.props.labelOn}
            labelOff={this.props.labelOff}
            status={this.state.on}
            whenClicked={this.handleClick}
        />
    }
}