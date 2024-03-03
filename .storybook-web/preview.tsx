import React from 'react';
import {Preview} from '@storybook/react';
import {ThemeProvider as StyledComponentsThemeProvider} from 'styled-components';

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
    Story => (
      <StyledComponentsThemeProvider theme={{name: 'light'}}>
        <Story />
      </StyledComponentsThemeProvider>
    ),
  ],
};

export default preview;
