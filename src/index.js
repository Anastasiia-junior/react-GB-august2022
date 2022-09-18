import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Header } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatPage, ProfilePage, HomePage, GistsPage } from './pages';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'


const theme = createTheme({
  palette: {
    primary: {
      main: '#50667b'
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/chatPage/*' element={<ChatPage />} />
            <Route path='/gists' element={<GistsPage />} />
            <Route path='*' element={<div>404</div>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      
    </Provider>
  </React.StrictMode >
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

