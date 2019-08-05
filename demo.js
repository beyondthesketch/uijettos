import React from 'react';
import ReactDOM from 'react-dom';

import {
    UijettosToggleButton,
    UijettosOptionsButton,
    UijettosSelectList
} from './index';

import './src/sass/toggle-button-defaults.scss';
import './src/sass/options-button-defaults.scss';
import './src/sass/select-list-defaults.scss';

ReactDOM.render(
    <UijettosToggleButton
        labelOn="Switched ON"
        labelOff="Switched OFF"
        initialState={ false }
        whenClicked={(state) => console.log('foobar', state)}
    />,
    document.getElementById('toggle-button')
);

ReactDOM.render(
    <UijettosOptionsButton
        label="foo"
        options={new Map(
            [
                ['widgets', () => console.log('widgets')],
                ['doodads', () => console.log('doodads')],
            ]
        )}
        whenClicked={() => console.log('foo')}
    />,
    document.getElementById('options-button')
);

ReactDOM.render(
    <UijettosSelectList
        initialSelected="baz"
        whenChanged={(val) => console.log(val)}
    >
        <li
            data-value="bar"
        >
            <div><span>bar</span></div>
        </li>
        <li
            data-value="baz"
        >baz
        </li>
        <li
            data-value="bat"
        >bat
        </li>
    </UijettosSelectList>,
    document.getElementById('select-list')
)