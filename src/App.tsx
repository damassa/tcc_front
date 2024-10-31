import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RoutesSite from './routes';
import './styles/global.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesSite />
    </QueryClientProvider>
  );
}

export default App;
