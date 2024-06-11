import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { FibonacciScreen } from './screens/FibonacciScreen';

const client = new QueryClient();

// TODO improvement: tanstack router
function App() {
  return (
    <QueryClientProvider client={client}>
      <FibonacciScreen />
    </QueryClientProvider>
  );
}

export default App;
