import { createFileRoute } from '@tanstack/react-router';

import { Container } from '@/components/atoms/containter';
import { DefaultCatchBoundary } from '@/components/pages/default-catch-boundary';

export const Route = createFileRoute('/(app)/_app/todos')({
  errorComponent: (props) => {
    return <DefaultCatchBoundary {...props} />;
  },
  component: TodosPage,
});

function TodosPage() {
  return (
    <Container className="py-4">
      <h1>Todos page</h1>
    </Container>
  );
}
