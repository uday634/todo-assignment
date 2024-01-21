import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import Todo from "./components/Todo/Todo.jsx";
import SignIn from "./components/SignUp/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { UseDispatch, useDispatch } from "react-redux";
import { authActions } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const dispatch= useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if(id){
      dispatch(authActions.login());
    }
  });
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/todo" element={<Todo />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/signIn" element={<SignIn />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
