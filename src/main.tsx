import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routing/route';


const queryClient = new QueryClient()

//Options for QueryClient ^^^^^^
//   {
//   defaultOptions: {
//     queries: {
//       retry: 3,
//       cacheTime: 300_000, //5m
//       staleTime: 10 * 1000, // 10s !!!
//       refetchOnWindowFocus:false,
//       refetchOnReconnect:false,
//       refetchOnMount:true
//     }
//   }
// });

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
