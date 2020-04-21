import React from 'react';
import renderer from 'react-test-renderer';

import UijettosSpinBox from './spin-box';

describe('UijettosSpinBox component', () => {
    test('Renders correctly when not supplied any props', () => {
        const tree = renderer.create(
            <UijettosSpinBox />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when supplied with an initialValue', () => {
        const tree = renderer.create(
            <UijettosSpinBox
                initialValue={ 27 }
            />
        ).toJSON();
    
        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when supplied with a cssClassPrefix', () => {
        const tree = renderer.create(
            <UijettosSpinBox
                cssClassPrefix="widget"
                initialValue={ 27 }
            />
        ).toJSON();
    
        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when supplied with a min value', () => {
        const tree = renderer.create(
            <UijettosSpinBox
                min={ 27 }
            />
        ).toJSON();
    
        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when supplied with a max value', () => {
        const tree = renderer.create(
            <UijettosSpinBox
                max={ 27 }
            />
        ).toJSON();
    
        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when supplied with a step value', () => {
        const tree = renderer.create(
            <UijettosSpinBox
                step={ 3 }
            />
        ).toJSON();
    
        expect(tree).toMatchSnapshot();
    });

    test('Renders correctly when supplied with autoWidth as true', () => {
        const tree = renderer.create(
            <UijettosSpinBox
                autoWidth={ true }
            />
        ).toJSON();
    
        expect(tree).toMatchSnapshot();
    });
});