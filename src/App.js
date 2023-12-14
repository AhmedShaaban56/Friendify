// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import React from "react";
// import "./App.css";
// import Login from "./Pages/Login/Login";
// import Register from "./Pages/Register/Register";
// import Home from "./Pages/Home/Home";

// // Custom ProtectedRoute component
// const ProtectedRoute = ({ condition, path, element }) => {
//   if (condition) {
//     return <Route path={path} element={element} />;
//   } else {
//     // Redirect to the login page if the condition is false
//     return <Navigate to="/login" replace />;
//   }
// };

// function App() {
//   // Replace this with your actual condition for protecting the route
//   const isUserLoggedIn = true; // Example condition

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Use the custom ProtectedRoute component */}
//         <ProtectedRoute
//           condition={isUserLoggedIn}
//           path="/"
//           element={<Home />}
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

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
      {/* <div className="applogo"></div> */}
      <Routes>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
