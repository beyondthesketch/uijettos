import React from 'react';
import renderer from 'react-test-renderer';

import UijettosToggleButton from './toggle-button';

describe('UijettosToggleButton component', () => {
    test('Renders correctly when not supplied any props', () => {
        const tree = renderer.create(
                <UijettosToggleButton />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when given a cssClassPrefix and state is false', () => {
        const tree = renderer.create(
                <UijettosToggleButton
                    initialState={ false }
                    cssClassPrefix="doodads"
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when given a cssClassPrefix and state is true', () => {
        const tree = renderer.create(
                <UijettosToggleButton
                    initialState={ true }
                    cssClassPrefix="doodads"
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when given initialState of true', () => {
        const tree = renderer
            .create(
                <UijettosToggleButton
                    initialState={ true }
                />
            )
            .toJSON();


        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when given initialState of false', () => {
        const tree = renderer
            .create(
                <UijettosToggleButton
                    initialState={ false }
                />
            )
            .toJSON();


        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when given a labelOff', () => {
        const tree = renderer
            .create(
                <UijettosToggleButton
                    labelOff="This is off"
                />
            )
            .toJSON();


        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when given a labelOn', () => {
        const tree = renderer
            .create(
                <UijettosToggleButton
                    initialState={ true}
                    labelOn="This is on"
                />
            )
            .toJSON();


        expect(tree).toMatchSnapshot();
    });
});
