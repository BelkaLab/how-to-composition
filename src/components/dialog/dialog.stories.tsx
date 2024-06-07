import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Label } from '@/components/label';

import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogImage,
  DialogTitle,
  DialogTrigger,
} from './dialog';

const meta: Meta = {
  title: 'Components/Dialog',
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Trigger</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithInput: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Trigger</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogHeader>

        <DialogBody>
          <Input placeholder="Hello!" />
        </DialogBody>

        <DialogFooter>
          <DialogClose>
            <Button className="w-full">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Trigger</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogImage src="https://picsum.photos/400/800" alt="Image" />
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const LoginDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Trigger</Button>
      </DialogTrigger>

      <DialogContent asChild>
        <form onSubmit={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              Sign in with your email address
            </DialogDescription>
          </DialogHeader>

          <DialogBody>
            <Label>
              Email
              <Input type="email" placeholder="Enter your email" required />
            </Label>

            <Label>
              Password
              <Input
                type="password"
                placeholder="Enter your password"
                required
              />
            </Label>
          </DialogBody>

          <DialogFooter orientation="vertical">
            <Button type="submit">Continue</Button>
            <Button variant="outline">
              Don't have an account yet? Sign Up
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  ),
};
