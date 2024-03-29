import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AllProducts from './components/AllProducts/AllProducts';
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import MyCart from './components/MyCart/MyCart';
import NewProduct from './components/NewProduct/NewProduct';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

import QuizIntro from './components/QuizIntro/QuizIntro';
import Quizes from './components/Quizes/Quizes';
import QuizResult from './components/QuizResult/QuizResult';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products', element: <AllProducts /> },
      {
        path: '/myskintypetest',
        element: <QuizIntro />,
      },
      { path: '/test', element: <Quizes /> },
      {
        path: '/products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      { path: '/products/:id', element: <ProductDetail /> },
      {
        path: '/carts',
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
      {
        path: '/result',
        element: <QuizResult />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
