import React, {useState} from 'react';
import {Switch, Text, View} from 'react-native';

import {Preview} from '@storybook/react';
import {ThemeProvider as StyledComponentsThemeProvider} from 'styled-components/native';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'plain',
      values: [
        {name: 'plain', value: 'white'},
        {name: 'warm', value: 'hotpink'},
        {name: 'cool', value: 'deepskyblue'},
      ],
    },
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => {
      const [isEnabled, setIsEnabled] = useState(false);
      const toggleSwitch = () => setIsEnabled(previousState => !previousState);
      return (
        <>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}>
            <Text>Light</Text>
            <Switch
              marginHorizontal={10}
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text>Dark</Text>
          </View>
          <StyledComponentsThemeProvider
            theme={{name: isEnabled ? 'dark' : 'light'}}>
            <Story />
          </StyledComponentsThemeProvider>
        </>
      );
    },
  ],
};

export default preview;
