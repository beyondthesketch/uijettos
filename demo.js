import React from 'react';
import ReactDOM from 'react-dom';

import {
    UijettosToggleButton,
    UijettosOptionsButton,
    UijettosSelectList
} from './index';

import './src/styles/_toggle-button-defaults.scss';

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
        <div
            data-value="bar"
        >
            <div><span>bar</span></div>
        </div>
        <div
            data-value="baz"
        >baz
        </div>
        <div
            data-value="bat"
        >bat
        </div>
    </UijettosSelectList>,
    document.getElementById('select-list')
)