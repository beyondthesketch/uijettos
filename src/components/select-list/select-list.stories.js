import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withCssResources } from '@storybook/addon-cssresources';
import UijettosSelectList from './select-list';

import defaultStyle from './../../sass/select-list-defaults.scss';


const stories = storiesOf('Select List', module);

stories.addDecorator(withKnobs);

stories.addDecorator(withCssResources);
stories.addParameters(
    {
        cssresources: [
            {
                id: `Select List Default`,
                code: `<style>${defaultStyle}</style>`,
                picked: true
            },
            {
                id: `Select List Pills`,
                code: `<style>.uijettos-select-list__options-list{padding:0;margin:0;list-style:none;display:flex;flex-direction:row;justify-content:flex-start;flex-wrap:wrap}.uijettos-select-list__option{font-family:'Lily Script One', cursive;display:flex;flex-direction:column;justify-content:center;align-items:center;box-sizing:border-box;width:4rem;height:4rem;padding:1rem;margin:0 0.5rem;border:1px solid rgba(0,0,0,0.05);border-radius:100%;transform:scale(1);box-shadow:0.1rem 0.1rem 0.5rem 0 rgba(0,0,0,0.15);background:#fee;color:#c49898;cursor:pointer;transition:background-color 500ms ease-out, box-shadow 500ms ease-out, transform 500ms ease-out, color 500ms ease-out, text-shadow 500ms ease-out;text-shadow:0px 0px 2px #FFF}.uijettos-select-list__option:not(.uijettos-select-list__option--selected):hover{transform:scale(1.05);box-shadow:0.2rem 0.2rem 1rem 0 rgba(0,0,0,0.1)}.uijettos-select-list__option:not(.uijettos-select-list__option--selected):active{transition:background-color 0 ease-out, box-shadow 0 ease-out, transform 0 ease-out, color 0 ease-out, text-shadow 0 ease-out;transform:scale(1.02);box-shadow:0.15rem 0.15rem 0.8rem 0 rgba(0,0,0,0.08)}.uijettos-select-list__option--selected{color:#7ac095;text-shadow:0px 0px 5px 20px #fff;transform:scale(1.05);box-shadow:0.2rem 0.2rem 1rem 0 rgba(0,0,0,0.1);background-color:#dcffe2}</style>`,
                picked: false
            },
            {
                id: `Select List Focal Length`,
                code: `<style>.uijettos-select-list__options-list{padding:0;margin:0;list-style:none;display:flex;flex-direction:row;justify-content:flex-start;flex-wrap:wrap}.uijettos-select-list__options-list:hover .uijettos-select-list__option:not(.uijettos-select-list__option--selected){transform:scale(0.92);filter:blur(0.03rem)}.uijettos-select-list__options-list:hover .uijettos-select-list__option:not(.uijettos-select-list__option--selected):hover{transform:scale(0.96);background-color:#333;filter:blur(0)}.uijettos-select-list__option{font-family:'Lily Script One', cursive;display:flex;flex-direction:column;justify-content:center;align-items:center;box-sizing:border-box;width:4rem;height:2rem;padding:1rem;margin:0 0.1rem;border-radius:1.5rem;transform:scale(1);background:#555;color:#ECECEC;cursor:pointer;transition:background-color 500ms ease-out, box-shadow 500ms ease-out, transform 500ms ease-out, color 500ms ease-out, text-shadow 500ms ease-out, filter 500ms ease-out, -webkit-filter 500ms ease-out;outline:none;filter:blur(0)}.uijettos-select-list__option:not(.uijettos-select-list__option--selected):hover{transform:scale(0.9)}.uijettos-select-list__option--selected{transform:scale(1);background:#111;color:#FFF}.uijettos-select-list__option--selected:hover{transform:scale(1)}</style>`,
                picked: false
            },
        ]
    }
);

stories
    .add(
        'with props',
        () => {
            const prefix = text('cssClassPrefix', 'uijettos');
            const initialSelected = text('initialSelected', 'bar');
            const selected = select('selected', [undefined, 'foo', 'bar', 'baz', 'bat'], undefined);

            return (<UijettosSelectList
                initialSelected={ initialSelected }
                selected={ selected }
                cssClassPrefix={ prefix }
                whenChanged={ action('Option selected') }
            >
                <li
                    data-value="foo"
                >Foo</li>
                <li
                    data-value="bar"
                >Bar</li>
                <li
                    data-value="baz"
                >Baz</li>
                <li
                    data-value="bat"
                >Bat</li>
            </UijettosSelectList>);
        }
    );