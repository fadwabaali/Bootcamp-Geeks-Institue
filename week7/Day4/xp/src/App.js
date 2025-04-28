import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/HomeScreen";
import Profile from "./components/ProfileScreen";
import Shop from "./components/ShopScreen";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";



function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/shop">Shop</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        } />
        <Route path="/profile" element={
          <ErrorBoundary>
            <Profile />
          </ErrorBoundary>
        } />
        <Route path="/shop" element={
          <ErrorBoundary>
            <Shop />
          </ErrorBoundary>
        } />
      </Routes>

      <PostList />
      <Example1 />
      <Example2 />
      <Example3 />
    </BrowserRouter>
  );
}

export default App;
