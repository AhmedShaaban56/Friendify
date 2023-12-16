import {
  BrowserRouter,
  Outlet,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Layout from "./Pages/Layout/Layout";
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/Home/Home";

function App() {
  const currentUser = true;

  const ProtectedRoute = () => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return <Outlet />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
