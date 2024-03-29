import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AddBlog from "../pages/AddBlog";
import Error from "../pages/Error";
import Navbar from "../layout/Navbar";
import { useState } from "react";
import Protect from "./protect";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar />

      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Log In
        </button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="addBlog"
          element={
            <Protect isLoggedIn={isLoggedIn}>
              <AddBlog />
            </Protect>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
