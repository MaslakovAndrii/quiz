import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store'
import { DataProvider } from './DataContext';
import App from './App';
import './firebase';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <DataProvider>
          <Provider store={store}>
               <App />
          </Provider>
     </DataProvider>
);

