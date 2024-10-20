import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from './context/GlobalContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <GlobalProvider>
    <ToastContainer></ToastContainer>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </GlobalProvider>
    </React.StrictMode>
  </Provider>
);
