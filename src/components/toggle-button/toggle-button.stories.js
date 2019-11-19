import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withCssResources } from '@storybook/addon-cssresources';
import UijettosToggleButton from './toggle-button';

const stories = storiesOf('Toggle Button', module);

stories.addDecorator(withKnobs);

stories.addDecorator(withCssResources);
stories.addParameters(
    {
        cssresources: [
            {
                id: `Toggle Button Default`,
                code: `<style>.uijettos-toggle-button{margin:0;padding:.5em 2.75em;border:1px solid rgba(0,0,0,0.15);display:inline-block;cursor:pointer;font:1rem/1.5 Verdana, Geneva, sans-serif;letter-spacing:.1em;border-radius:4px;background:#ECECEC linear-gradient(#FEFEFE, #ECECEC);color:#333;box-shadow:0 0.2rem 0.5rem -0.3rem rgba(0,0,0,0.2);transition:background-color 500ms ease-out}.uijettos-toggle-button:hover{background-color:#f1f1f1}.uijettos-toggle-button:active{box-shadow:inset 0.1rem 0.1rem 0.2rem 0 rgba(0,0,0,0.2)}.uijettos-toggle-button__label--on{color:darkgreen}</style>`,
                picked: true
            },
            {
                id: `Toggle Button Chiclet`,
                code: `<style>.uijettos-toggle-button{position:relative;display:inline-block;border-radius:8px;box-sizing:border-box;border:1px solid rgba(158,158,158,0.2);color:#FFF;padding:2rem;background:linear-gradient(#444, #333);box-shadow:0 0 2px 0 rgba(0,0,0,0.4),0 0 0 2px #000,1px -1px 2px 4px rgba(0,0,0,0.1)}.uijettos-toggle-button:active{background:linear-gradient(#414141, #303030);border:1px solid rgba(0,0,0,0.3);box-shadow:0 0 2px 0 rgba(0,0,0,0.4),0 0 0 3px #000,0 0 0 0 rgba(0,0,0,0.1);padding:calc(2rem - 1px);transform:translate(1px, 1px)}.uijettos-toggle-button:active>.uijettos-toggle-button__label{transform:scale(0.97, 0.97)}.uijettos-toggle-button::after{content:"";display:block;position:absolute;width:10px;height:10px;border-radius:100%;top:10%;left:20%;background:linear-gradient(#afafaf, #ECECEC)}.uijettos-toggle-button--on{box-shadow:-10px -8px 5px -10px rgba(0,255,0,0.5),0 0 2px 0 rgba(0,0,0,0.4),0 0 0 2px #000,1px -1px 2px 4px rgba(0,0,0,0.1)}.uijettos-toggle-button--on::after{background:linear-gradient(20deg, #91ff76, #5ebd4b);box-shadow:0 0 3px 0 rgba(0,255,0,0.5)}.uijettos-toggle-button__label{display:block;font-size:20px}</style>`,
                picked: false
            },
        ]
    }
);


stories
    .add(
        'with props',
        () => {
            const labelOn = text('labelOn', 'Switched On');
            const labelOff = text('labelOff', 'Switched Off');
            const cssClassPrefix = text('cssClassPrefix', 'uijettos');
            const initialState = boolean('initialState', false);

            return (
                <UijettosToggleButton
                    cssClassPrefix={ cssClassPrefix }
                    initialState={ initialState }
                    labelOn={labelOn}
                    labelOff={labelOff}
                    whenClicked={ action('Button clicked') }
                />
            );
        }
    );
