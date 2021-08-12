import React from 'react';
import renderer, { act } from 'react-test-renderer';

import UijettosOptionsButton from './options-button';

describe('UijettosOptionsButton component', () => {
    test('Renders correctly when not supplied any props', () => {
        const tree =
            renderer
                .create(
                    <UijettosOptionsButton />
                )
                .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when supplied a css prefix and closed', () => {
        const tree =
            renderer
                .create(
                    <UijettosOptionsButton
                        cssClassPrefix="doodads"
                        options={[
                            ['widgets', () => null],
                            ['doodads', () => null]
                        ]}
                    />
                );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Renders correctly when supplied a css prefix and open', () => {
        const tree =
            renderer
                .create(
                    <UijettosOptionsButton
                        cssClassPrefix="doodads"
                        open={true}
                        options={[
                            ['widgets', () => null],
                            ['doodads', () => null]
                        ]}
                    />
                );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Renders correctly when supplied with a label', () => {
        const tree =
            renderer
                .create(
                    <UijettosOptionsButton
                        label={ 'Foo Bar' }
                    />
                )
                .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when supplied with options and closed', () => {
        const tree =
            renderer
                .create(
                    <UijettosOptionsButton
                        options={
                            [
                                ['widgets', () => null],
                                ['doodads', () => null]
                            ]
                        }
                    />
                )

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Renders correctly when supplied with options and open', () => {
        const tree =
            renderer
                .create(
                    <UijettosOptionsButton
                        open={true}
                        options={
                            [
                                ['widgets', () => null],
                                ['doodads', () => null]
                            ]
                        }
                    />
                )

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Renders options correctly when trigger button is clicked', () => {
        const mockEvent = {
            stopPropagation: jest.fn(),
            target: {
                focus: jest.fn(),
            },
        };
        const tree =
            renderer
                .create(
                    <UijettosOptionsButton
                        options={
                            [
                                ['widgets', () => null],
                                ['doodads', () => null]
                            ]
                        }
                    />
                );
        act(
            () => {
                tree.root
                    .findByProps(
                        {
                            className: 'uijettos-options-button__options-trigger'
                        }
                    )
                    .props
                    .onClick(
                        mockEvent
                    );
            }
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });
});
