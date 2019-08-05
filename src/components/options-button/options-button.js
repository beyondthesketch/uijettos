import React from 'react';

import  DEFAULT_CSS_CLASS_PREFIX from './../../constants/default-css-class-prefix';

export const UijettosStatelessOptionsButton = React.forwardRef((
    {
        open,
        cssClassPrefix = DEFAULT_CSS_CLASS_PREFIX,
        whenClicked,
        whenOptionsTriggerClicked,
        label,
        options,
    },
    ref
) => {
        const cssRootClass = `${cssClassPrefix}-options-button`;
        return (
            <button
                ref={ref}
                className={cssRootClass}
                onClick={whenClicked}
            >
                {label}
                <span
                    className={`${cssRootClass}__options-trigger`}
                    onClick={
                        event => {
                            event.stopPropagation();
                            whenOptionsTriggerClicked && whenOptionsTriggerClicked();
                        }
                    }
                ></span>
                <span
                    className={`${cssRootClass}__options-list${open ? ' ' + cssRootClass + '__options-list--open' : ''}`}
                    style={
                        !open 
                            ?
                            {
                                display: 'none'
                            }
                            :
                            null
                    }
                >
                    {
                        !!options
                        && options.size > 0
                        && Array.from(options).map(
                            ([label, whenClicked], i) => (
                                <span
                                    key={label}
                                    className={`${cssRootClass}__option`}
                                    onClick={
                                        event => {
                                            event.stopPropagation();
                                            whenClicked();
                                            whenOptionsTriggerClicked();
                                        }
                                    }
                                >
                                    {label}
                                </span>
                            )
                        )
                    }
                </span>
            </button>
        );
});

export default class UijettosOptionsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.buttonRef = React.createRef();

        this.handleOptionsListTriggerClick = this.handleOptionsListTriggerClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    handleOutsideClick(event) {
        let node = event.target;
        if (node !== this.buttonRef) {
            this.setState({
                open: false
            });
        }
        window.removeEventListener('click', this.handleOutsideClick, false);
    }

    handleOptionsListTriggerClick() {
        this.setState(
            prevState => ({
                open: !prevState.open 
            }),
            () => {
                if (this.state.open) {
                    window.addEventListener('click', this.handleOutsideClick, false);
                }
                else {
                    window.removeEventListener('click', this.handleOutsideClick, false);
                }
            }
        );
    }

    componentWillUnmount() {
        if (this.state.open) {
            window.removeEventListener('click', this.handleOutsideClick, false);
        }
    }

    render() {
        return <UijettosStatelessOptionsButton
                ref={this.buttonRef}  
                cssClassPrefix={this.props.cssClassPrefix}
                label={this.props.label}
                open={this.state.open}
                whenClicked={this.props.whenClicked}
                whenOptionsTriggerClicked={this.handleOptionsListTriggerClick}
                options={this.props.options}
            />;
    }
}
