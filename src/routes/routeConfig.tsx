import React from 'react';

import Home from 'src/pages/Home/Home';
import { RouteObject } from 'react-router-dom';
import AR from 'src/pages/AR/AR';
import Recommendation from 'src/pages/Recommendation/Recommendation';

const getRouteConfig = (): Array<RouteObject> => {
  return [
    {
      index: true,
      element: (<Home />) as React.ReactElement,
    },
    {
      path: '/ar',
      element: (<AR />) as React.ReactElement,
    },
    {
      path: '/recommendation',
      element: (<Recommendation />) as React.ReactElement,
    },
  ];
};

export default getRouteConfig;
