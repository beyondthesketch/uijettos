import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withCssResources } from '@storybook/addon-cssresources';
import UijettosSpinBox from './spin-box';

import defaultStyles from './../../sass/spin-box.defaults.scss';

const stories = storiesOf('Spin Box', module);

stories.addDecorator(withKnobs);

stories.addDecorator(withCssResources);
stories.addParameters(
    {
        cssresources: [
            {
                id: `Spin Box Default`,
                code: `<style>${defaultStyles}</style>`,
                picked: true
            },
        ]
    }
);

stories
    .add(
        'with props',
        () => {
            const prefix = text('cssClassPrefix', 'uijettos');
            const initialValue = number('initialValue', 3);
            const min = number('min', 2);
            const max = number('max', 5);
            const step = number('step', undefined);
            const allowEmpty = boolean('allowEmpty', false);
            const autoWidth = boolean('autoWidth', true);

            return (
                <UijettosSpinBox
                    cssClassPrefix={ prefix }
                    initialValue={ initialValue }
                    min={ min }
                    max={ max }
                    step={ step }
                    allowEmpty={ allowEmpty }
                    autoWidth={ autoWidth }
                    whenChanged={ action('changed') }
                    whenDecreased={ action('decreased') }
                    whenIncreased={ action('increased') }
                />
            );
        }
    );