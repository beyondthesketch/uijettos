import React from 'react';
import ReactDOM from 'react-dom';

import {
    UijettosToggleButton,
    UijettosSelectList,
    UijettosOptionsButton
} from './index';

import './src/styles/_options-button-defaults.scss';

ReactDOM.render(
    <UijettosToggleButton
        labelOn="Switched ON"
        labelOff="turned OFF"
        initial={true}
        whenClicked={(state) => console.log(state)}
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