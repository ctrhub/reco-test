import { createFileRoute } from '@tanstack/react-router';

import { Container } from '@/components/atoms/containter';
import { DefaultCatchBoundary } from '@/components/pages/default-catch-boundary';
import { useUser } from '@/lib/state/users.state';

export const Route = createFileRoute('/(app)/_app/')({
  errorComponent: (props) => {
    return <DefaultCatchBoundary {...props} />;
  },
  component: Home,
});

function Greeting() {
  const { user } = useUser();

  return (
    <>
      <h3>
        Welcome&nbsp;
        {user?.firstName}!
      </h3>
    </>
  );
}

function Home() {
  return (
    <Container className="py-4">
      <Greeting />
    </Container>
  );
}
