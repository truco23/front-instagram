import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import appRoutes from './app.routes';
import Header from './shared/components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {
        appRoutes.map((route, indice) => {

          return(
            <Suspense key={ indice } fallback={ <div>Carregando aguarde...</div> }>
              <Route 
                exact={ route.exact }
                path={ route.path }
                component={ route.component }
              />
            </Suspense>
          )
        })
      }
    </div>
  );
}

export default App;
