import { 
    addParameters,
    configure,
} from '@storybook/react';
import uijettosTheme from './uijettosTheme';

addParameters({
    options: {
        theme: uijettosTheme
    }
});

configure(require.context('../src', true, /\.stories\.js$/), module);
