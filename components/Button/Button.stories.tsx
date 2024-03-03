// stories/MyButton.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';

import {MyButton} from './Button';

const meta = {
  title: 'components/MyButton',
  component: MyButton,
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Hello World',
  },
};
