import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Validation from './components/Validation';
import FormValidWithEmail from './components/FormValidWithEmail';
import FormValidWithPassword from './components/FormValidWithPassword';
import Error from './components/Error';
import FullValidatReact from './components/FullValidatReact';
import MyLogicFormValidat from './components/MyLogicFormValidat';
import Test from './components/Text';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Validation />} />
        <Route path="/emailvalidat" element={<FormValidWithEmail />} />
        <Route path="/passwordvalidat" element={<FormValidWithPassword />} />
        <Route path="/fullvalidformreact" element={<FullValidatReact />} />
        <Route path="/mylogicformvalidat" element={<MyLogicFormValidat />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
