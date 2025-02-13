import { Container } from '@/components/atoms/containter';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/_app/')({
  component: Home,
});

function Home() {
  return (
    <Container className="py-4">
      <h3>Welcome Home!!!</h3>
    </Container>
  );
}
