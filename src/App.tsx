import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './routes';
import './styles/global.css';
import { RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
