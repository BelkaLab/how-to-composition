import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    children: 'Badge',
    size: 'md',
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args) => <Badge {...args} />,
};
