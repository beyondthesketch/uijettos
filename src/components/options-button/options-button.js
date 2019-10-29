import React from 'react';

import  DEFAULT_CSS_CLASS_PREFIX from './../../constants/default-css-class-prefix';

// NOTE: The `handleOutsideClick` implementation is necessary to handle Safari correctly (tested on v12)

export default class UijettosOptionsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open || false
        };
        this.buttonRef = React.createRef();
        this.timeoutId = null;

        this.handleOptionsListTriggerClick = this.handleOptionsListTriggerClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleBlur() {
        this.state.open && (this.timeoutId = setTimeout(
            () => {
                this.setState(
                    {
                        open: false
                    }
                )
            }
        )) && window.removeEventListener('click', this.handleOutsideClick, false);
    }

    handleFocus() {
        this.timeoutId && clearTimeout(this.timeoutId);
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
        const {
            cssClassPrefix = DEFAULT_CSS_CLASS_PREFIX,
            whenClicked,
            whenOptionsTriggerClicked,
            label,
            options,
        } = this.props;
        const cssRootClass = `${cssClassPrefix}-options-button`;

        return (
            <div
                className={cssRootClass}
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
            >
                <button
                    className={`${cssRootClass}__main-button`}
                    onClick={whenClicked}
                >
                    {label}
                </button>
                <button
                    className={`${cssRootClass}__options-trigger`}
                    onClick={
                        event => {
                            event.stopPropagation();
                            this.handleOptionsListTriggerClick();
                            whenOptionsTriggerClicked && whenOptionsTriggerClicked();
                        }
                    }
                ></button>
                {
                    this.state.open && (<div
                        className={`${cssRootClass}__options-list${this.state.open ? ' ' + cssRootClass + '__options-list--open' : ''}`}
                    >
                        {
                            !!options
                            && options.size > 0
                            && Array.from(options).map(
                                ([label, whenClicked], i) => (
                                    <button
                                        key={label}
                                        className={`${cssRootClass}__option`}
                                        onClick={
                                            event => {
                                                event.stopPropagation();
                                                whenClicked && whenClicked();
                                                whenOptionsTriggerClicked && whenOptionsTriggerClicked();
                                                this.handleOptionsListTriggerClick();
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
}
