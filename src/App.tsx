import React from 'react';

import AppProvider from 'src/context/AppProvider';
import Router from 'src/routes/Router';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

export default App;
