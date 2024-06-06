import { CheckIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';

function App() {
  return (
    <div className="flex flex-col items-start justify-start gap-4 p-4">
      <Button>Click me!</Button>

      <Dialog>
        <DialogTrigger>
          <Button>
            <PaperAirplaneIcon />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete this action?</DialogTitle>
            <DialogDescription>
              You can’t undo this action later.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>
              Confirm <CheckIcon />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { App };
