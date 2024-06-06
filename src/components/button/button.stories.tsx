import { InformationCircleIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonBadge } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline'],
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: 'Button',
    size: 'md',
    variant: 'solid',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
};

export const LeftIcon: Story = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      <InformationCircleIcon />
      {children}
    </Button>
  ),
};

export const RightIcon: Story = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      {children}
      <InformationCircleIcon />
    </Button>
  ),
};

export const TwoIcons: Story = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      <InformationCircleIcon />
      {children}
      <InformationCircleIcon />
    </Button>
  ),
};

export const LeftBadge: Story = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      <ButtonBadge>123</ButtonBadge>
      {children}
    </Button>
  ),
};

export const RightBadge: Story = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      {children}
      <ButtonBadge>123</ButtonBadge>
    </Button>
  ),
};
