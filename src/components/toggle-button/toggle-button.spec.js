import React from 'react';
import renderer, {act} from 'react-test-renderer';

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

    test('Calls whenClicked correctly when given initialState of true', () => {
        const mockWhenClicked = jest.fn();

        const tree = renderer
            .create(
                <UijettosToggleButton
                    initialState={ true }
                    whenClicked={ mockWhenClicked }
                />
            )
            .toJSON();

        // toggle off
        act(
            () => tree.props.onClick()
        );
        expect(mockWhenClicked).toHaveBeenCalledWith(false);
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


    test('Calls whenClicked correctly when given initialState of false', () => {
        const mockWhenClicked = jest.fn();

        const tree = renderer
            .create(
                <UijettosToggleButton
                    initialState={ false }
                    whenClicked={ mockWhenClicked }
                />
            )
            .toJSON();

        // toggle on
        act(
            () => tree.props.onClick()
        );
        expect(mockWhenClicked).toHaveBeenCalledWith(true);
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

    test('Renders correctly and button is disabled when disabled prop is set to true', () => {
        const tree = renderer
            .create(
                <UijettosToggleButton
                    disabled={ true }
                />
            )
            .toJSON();


        expect(tree).toMatchSnapshot();
    });

    describe('Stateless mode', () => {
        test('Renders correctly when state prop is set to true, ignoring the initialState', () => {
            const tree = renderer
                .create(
                    <UijettosToggleButton
                        initialState={ false }
                        state={ true }
                    />
                )
                .toJSON();

            expect(tree).toMatchSnapshot();
        });

        test('Correctly calls the whenClicked function and renders correctly after being clicked, when state prop is set to true', () => {
            const mockWhenChanged = jest.fn();
            const component = renderer
                .create(
                    <UijettosToggleButton
                        initialState={ false }
                        state={ true }
                        whenClicked={ mockWhenChanged }
                    />
                );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();

            // trigger click
            tree.props.onClick();
            expect( mockWhenChanged ).toHaveBeenCalledWith(false);
            tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });



        test('Renders correctly when state prop is set to false, ignoring the initialState', () => {
            const tree = renderer
                .create(
                    <UijettosToggleButton
                        initialState={ true }
                        state={ false }
                    />
                )
                .toJSON();

            expect(tree).toMatchSnapshot();
        });

        test('Correctly calls the whenClicked function and renders correctly after being clicked, when state prop is set to false', () => {
            const mockWhenChanged = jest.fn();
            const component = renderer
                .create(
                    <UijettosToggleButton
                        initialState={ true }
                        state={ false }
                        whenClicked={ mockWhenChanged }
                    />
                );
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();

            // trigger click
            tree.props.onClick()
            
            expect( mockWhenChanged ).toHaveBeenCalledWith(true);
            tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    })
});
