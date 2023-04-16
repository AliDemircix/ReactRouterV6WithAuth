import * as React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './pages/Home';
import {Login} from './pages/Login';
import { AuthProvider } from "./components/AuthProvider";
import Layout from "./components/Navbar";
import { RequireAuth } from "./components/RequireAuth";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
    <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route
        path="/protected"
        element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        }
      />
    </Route>
  </Routes>
  </BrowserRouter>
</AuthProvider>
  );
}

export default App;
