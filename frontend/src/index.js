import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
// import Admin from './pages/Admin';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/admin/Navbar';
import Dashboard from './pages/admin/Dashboard';
import Room from './pages/admin/Room';
import Reservation from './pages/admin/Reservations';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/navbar' element={<Navbar />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/room' element={<Room />}/>
          <Route path='/reservation' element={<Reservation />}/>
        </Routes>
        {/* <Header />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/register' element={<Register />}/>  
        </Routes>
        <Footer /> */}
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
