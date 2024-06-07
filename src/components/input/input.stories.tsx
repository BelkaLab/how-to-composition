import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '@/components/label';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    value: {
      control: 'text',
    },
  },
  args: {
    placeholder: 'Input',
    size: 'md',
    value: 'Input',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} />,
};

export const WithPlaceholder: Story = {
  args: {
    value: '',
  },
  render: (args) => <Input {...args} />,
};

export const WithLabel: Story = {
  args: {
    value: '',
  },
  render: (args) => (
    <Label>
      Label
      <Input {...args} />
    </Label>
  ),
};
