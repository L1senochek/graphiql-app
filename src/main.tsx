import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store()}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
