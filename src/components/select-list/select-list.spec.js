import React from 'react';
import renderer from 'react-test-renderer';

import UijettosSelectList from './select-list';

describe('UijettosSelectList component', () => {
    test('Renders correctly when not supplied any props', () => {
        const tree =
            renderer.create(
                <UijettosSelectList />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when supplied child <li>s', () => {
        const tree =
            renderer.create(
                <UijettosSelectList>
                    <li
                        data-value="foo"
                    >Foo</li>
                    <li
                        data-value="bar"
                    >Bar</li>
                    <li
                        data-value="baz"
                    >Baz</li>
                </UijettosSelectList>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when supplied child <li>s and an initial selected', () => {
        const tree =
            renderer.create(
                <UijettosSelectList
                    initialSelected="bar"
                >
                    <li
                        data-value="foo"
                    >Foo</li>
                    <li
                        data-value="bar"
                    >Bar</li>
                    <li
                        data-value="baz"
                    >Baz</li>
                </UijettosSelectList>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when supplied a cssClassPrefix', () => {
        const tree =
            renderer.create(
                <UijettosSelectList
                    cssClassPrefix="doodads"
                >
                    <li
                        data-value="foo"
                    >Foo</li>
                    <li
                        data-value="bar"
                    >Bar</li>
                    <li
                        data-value="baz"
                    >Baz</li>
                </UijettosSelectList>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    describe('Stateless mode', () => {
        test('Renders correctly when selected prop is set to a value, ignoring the initialSelected', () => {
            const tree = renderer
                .create(
                    <UijettosSelectList
                        initialSelected="bar"
                        selected="baz"
                    >
                        <li
                            data-value="foo"
                        >Foo</li>
                        <li
                            data-value="bar"
                        >Bar</li>
                        <li
                            data-value="baz"
                        >Baz</li>
                    </UijettosSelectList>
                )
                .toJSON();

            expect(tree).toMatchSnapshot();
        })
    })
});