import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={ user ? (
                <Home />
              ) : (
                <Navigate replace to='/login' />
              )
            } />
            <Route path='/login' element={ !user ? (
                <Login />
              ) : (
                <Navigate replace to='/' />
              )
            } />
            <Route path='/signup' element={ !user ? (
                <Signup />
              ) : (
                <Navigate replace to='/' />
              )
            } />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
