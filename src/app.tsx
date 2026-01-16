import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from "./pages/main";
import { Goals } from './pages/goals';
import { Transaction } from './pages/transaction';
import DefaultPage from './pages/layout/default';


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/transaction", element: <Transaction /> },
      { path: "/goals", element: <Goals /> }
    ],
  },
]);

export function App() {
  return (
      <RouterProvider router={router} />
  );
}