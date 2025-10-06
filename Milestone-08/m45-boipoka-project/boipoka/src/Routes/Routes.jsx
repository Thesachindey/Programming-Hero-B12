import React from 'react';
import {
  createBrowserRouter
} from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('../../public/data/booksData.json'),
        path: '/',

        Component: Home,
      },
      {
        path: '/About',
        Component: About,
      },
      {
        path: '/BookDetails/:id',
        Component: BookDetails,
      }

    ]
  },
]);

