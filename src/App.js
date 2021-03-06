import React from 'react';
import './App.css';
import { Login, Page, Register, Dashboard } from './components'
import { Routes, Route, Navigate } from "react-router-dom";
import Cookies from 'js-cookie'
function App() {
  const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : false

  const RequireLogin = ({ children }) => {
    if (!Cookies.get('user')) {
      return <Navigate to="/login" />
    }

    return <Page>{children}</Page>

  }
  return (
    <div className="App">
      <Routes>
        <Route path="/recuperacionfront/login" element={<Login />} />
        <Route path="/recuperacionfront" element={<Login />} />
        <Route path="/recuperacionfront/register" element={<Register />} />
        <Route path="recuperacionfront/dashboard" element={
          <RequireLogin>
            <Dashboard user={user} />
          </RequireLogin>
        } />
      </Routes>
      {/* <Topbar />
       <div className="container">
        <h2>
          Bienvenido {usuario.name}
        </h2>


      </div> */}
    </div>
  );
}

export default App;
