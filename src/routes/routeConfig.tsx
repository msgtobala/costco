import { RouteObject } from 'react-router-dom';

const getRouteConfig = (): Array<RouteObject> => {
  return [
    {
      index: true,
      element: <p>Hai</p>,
    },
    {
      path: '/ar',
      element: <p>AR</p>,
    },
    {
      path: '/recommendation',
      element: <p>Recommendation</p>,
    },
  ];
};

export default getRouteConfig;
