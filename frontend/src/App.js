import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { authContext } from './lib/auth';


function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false)

  return (
    <authContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Header />
      <Outlet />
      <Footer />
    </authContext.Provider>
  );
}

export default App;
