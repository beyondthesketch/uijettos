import React from 'react';
import renderer from 'react-test-renderer';

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

    test('Renders correctly when supplied a css prefix', () => {
        const tree =
            renderer
                .create(
                    <UijettosOptionsButton
                        cssClassPrefix="doodads"
                        options={
                            new Map(
                                [
                                    ['widgets', () => null],
                                    ['doodads', () => null]
                                ]
                            )
                        }
                    />
                );

        expect(tree.toJSON()).toMatchSnapshot();

        tree.root.instance.setState(
            {
                open: true
            }
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

    test('Renders correctly when supplied with options', () => {
        const tree =
            renderer
                .create(
                    <UijettosOptionsButton
                        options={
                            new Map(
                                [
                                    ['widgets', () => null],
                                    ['doodads', () => null]
                                ]
                            )
                        }
                    />
                )

        expect(tree.toJSON()).toMatchSnapshot();

        tree.root.instance.setState(
            {
                open: true
            }
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Renders options correctly when trigger button is clicked', () => {
        const mockEvent = {
            stopPropagation: jest.fn()
        };
        const tree =
            renderer
                .create(
                    <UijettosOptionsButton
                        options={
                            new Map(
                                [
                                    ['widgets', () => null],
                                    ['doodads', () => null]
                                ]
                            )
                        }
                    />
                );

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

        expect(tree.toJSON()).toMatchSnapshot();
    });
});
