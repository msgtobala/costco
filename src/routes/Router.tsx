import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import getRouteConfig from 'src/routes/routeConfig';

const Router: React.FC = (): JSX.Element => {
  const routeConfig = getRouteConfig();
  const router = createBrowserRouter(routeConfig);

  return <RouterProvider router={router} />;
};

export default Router;
