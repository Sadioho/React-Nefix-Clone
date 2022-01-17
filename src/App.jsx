import './app.scss';
import Home from './pages/home/Home';
import Watch from './components/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={user ? <Home /> : <Navigate to="register" />}
        ></Route>

        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        ></Route>

        {user && (
          <>
            <Route path="/movies" element={<Home type="movies" />}></Route>
            <Route path="/series" element={<Home type="series" />}></Route>
            <Route path="/watch" element={<Watch />}></Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
