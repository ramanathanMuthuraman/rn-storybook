import {Preview} from '@storybook/react';
import {withThemeFromJSXProvider} from '@storybook/addon-themes';
import {ThemeProvider as StyledComponentsThemeProvider} from 'styled-components/native';

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: {name: 'light'},
        dark: {name: 'dark'},
      },
      defaultTheme: 'light',
      Provider: StyledComponentsThemeProvider,
    }),
  ],
};

export default preview;
