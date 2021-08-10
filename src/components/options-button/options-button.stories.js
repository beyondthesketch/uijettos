import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withCssResources } from '@storybook/addon-cssresources';
import UijettosOptionsButton from './options-button';

const stories = storiesOf('Options Button', module);

stories.addDecorator(withKnobs);

stories.addDecorator(withCssResources);
stories.addParameters(
    {
        cssresources: [
            {
                id: `Options Button Default`,
                code: `<style>.uijettos-options-button{display:inline-block;margin:.5em auto;position:relative}.uijettos-options-button__main-button{margin:0;padding:.5em 2.75em;border:1px solid rgba(0,0,0,0.15);display:inline-block;cursor:pointer;font:1rem/1.5 Verdana, Geneva, sans-serif;letter-spacing:.1em;border-radius:4px;background:#ECECEC linear-gradient(#FEFEFE, #ECECEC);color:#333;box-shadow:0 0.2rem 0.5rem -0.3rem rgba(0,0,0,0.2);transition:background-color 500ms ease-out;padding:.5em 2.75em .5em 1.75em}.uijettos-options-button__main-button:hover{background-color:#f1f1f1}.uijettos-options-button__main-button:active{box-shadow:inset 0.1rem 0.1rem 0.2rem 0 rgba(0,0,0,0.2)}.uijettos-options-button__options-trigger{position:absolute;right:0;appearance:none;background:none;border:none;padding:0;margin:0;display:inline-flex;flex-direction:row;justify-content:center;align-items:center;width:30px;height:100%;cursor:pointer}.uijettos-options-button__options-trigger::before{content:"";display:block;width:1px;height:25px;position:absolute;left:0;background-color:#CDCDCD}.uijettos-options-button__options-trigger::after{content:"•"}.uijettos-options-button__options-list{padding:0;margin:.25em 0 0;position:absolute;background:inherit;left:0;top:100%;background:#FFF;width:100%;border:1px solid #ECECEC;border-radius:4px;box-sizing:inherit;overflow:hidden;box-shadow:0 0.2rem 0.5rem -0.3rem rgba(0,0,0,0.2);z-index:2}.uijettos-options-button__option{-webkit-appearance:none;appearance:none;background:transparent;border:none;padding:0 1em;margin:0;display:block;height:40px;width:100%;text-align:left;border-bottom:1px solid #f2f2f2;cursor:pointer}.uijettos-options-button__option:hover,.uijettos-options-button__option:focus{background-color:#f2f2f2}.uijettos-options-button__option:last-child{border-bottom:none}</style>`,
                picked: true
            }
        ]
    }
);

stories
    .add(
        'with props',
        () => {
            const prefix = text('cssClassPrefix', 'uijettos');
            const label = text('label', 'foo');
            const options = 
                    [
                        ['widgets', action('Options click')],
                        ['doodads', action('Options click')],
                    ]
            ;

            return (<UijettosOptionsButton
                cssClassPrefix={ prefix }
                label={ label }
                options={ options }
                whenClicked={ action('Main click')}
                whenOptionsTriggerClicked={ action('Options trigger clicked') }
            />);
        }
    );