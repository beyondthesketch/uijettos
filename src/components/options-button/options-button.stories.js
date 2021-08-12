import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withCssResources } from '@storybook/addon-cssresources';
import UijettosOptionsButton from './options-button';

import defaultStyles from './../../sass/options-button-defaults.scss';

const stories = storiesOf('Options Button', module);

stories.addDecorator(withKnobs);

stories.addDecorator(withCssResources);
stories.addParameters(
    {
        cssresources: [
            {
                id: `Options Button Default`,
                code: `<style>${defaultStyles}</style>`,
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