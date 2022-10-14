import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { OrdersTab } from '../OrdersTab/OrdersTab';
import { Link } from 'react-router-dom';

export const Orders = () => {

  const queryClient = new QueryClient();

  return (
    <main className="container">
      <QueryClientProvider client={queryClient}>
        <nav className="nav-subpage">
          <h1>Orders</h1>
          <Link to="/">Strona główna</Link>
        </nav>
        <OrdersTab />
      </QueryClientProvider>
    </main>
  );
}
