import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/input';

import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Label',
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => <Label {...args} />,
};

export const WithInput: Story = {
  render: ({ children, ...args }) => (
    <Label {...args}>
      {children}
      <Input placeholder="Input" />
    </Label>
  ),
};
