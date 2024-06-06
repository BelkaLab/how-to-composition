import { PlusCircledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { Badge } from '@/components/badge';
import { Button } from '@/components/button';

function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <Button onClick={handleClick}>
        <PlusCircledIcon />
        Click me!
        {clicks > 0 && <Badge>{clicks}</Badge>}
        <PlusCircledIcon />
      </Button>

      <Button>
        <PlusCircledIcon />
      </Button>
    </div>
  );
}

export { App };
