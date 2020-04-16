import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withCssResources } from '@storybook/addon-cssresources';
import UijettosSpinBox from './spin-box';

const stories = storiesOf('Spin Box', module);

stories.addDecorator(withKnobs);

// stories.addDecorator(withCssResources);
// stories.addParameters(
//     {
//         cssresources: [
//             {
//                 id: `Spin Box Default`,
//                 code: `<style></style>`,
//                 picked: true
//             },
//         ]
//     }
// );

stories
    .add(
        'with props',
        () => {
            const prefix = text('cssClassPrefix', 'uijettos');
            const initialValue = number('initialValue', 3);
            const min = number('min', 2);
            const max = number('max', 5);
            const allowEmpty = boolean('allowEmpty', false);

            return (
                <UijettosSpinBox
                    cssClassPrefix={ prefix }
                    initialValue={ initialValue }
                    min={ min }
                    max={ max }
                    allowEmpty={ allowEmpty }
                    whenChanged={ action('changed') }
                    whenDecreased={ action('decreased') }
                    whenIncreased={ action('increased') }
                />
            );
        }
    );