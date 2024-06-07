import { PlusCircleIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@/components/badge';

import { Button } from './button';

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
  render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};

export const WithLeftIcon: Story = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      <PlusCircleIcon />
      {children}
    </Button>
  ),
};

export const WithRightIcon: Story = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      {children}
      <PlusCircleIcon />
    </Button>
  ),
};

export const WithTwoIcons: Story = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      <PlusCircleIcon />
      {children}
      <PlusCircleIcon />
    </Button>
  ),
};

export const WithBadge: Story = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      {children}
      <Badge>123</Badge>
    </Button>
  ),
};

export const WithTwoAndBadgeIcons: Story = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      <PlusCircleIcon />
      {children}
      <Badge>123</Badge>
      <PlusCircleIcon />
    </Button>
  ),
};
