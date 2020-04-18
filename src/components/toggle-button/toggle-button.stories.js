import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withCssResources } from '@storybook/addon-cssresources';
import UijettosToggleButton from './toggle-button';

import defaultStyle from './../../sass/toggle-button-defaults.scss';
import chicletStyle from './../../sass/toggle-button.chiclet.scss';

const stories = storiesOf('Toggle Button', module);

stories.addDecorator(withKnobs);

stories.addDecorator(withCssResources);
stories.addParameters(
    {
        cssresources: [
            {
                id: `Toggle Button Default`,
                code: `<style>${defaultStyle}</style>`,
                picked: true
            },
            {
                id: `Toggle Button Chiclet`,
                code: `<style>${chicletStyle}</style>`,
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
