import "./SignUp.css";
import HeadingComp from "./HeadingComp";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseDispatch, useDispatch } from "react-redux";
import { authActions } from "../../store";

const SignIn = () => {
  const dispacth = useDispatch()
  const [Inputs, setInputs] = useState({ email: "", password: "" });
  const history = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:3001/user/signIn`, Inputs)
      .then((response) => {
        sessionStorage.setItem("id", response.data.message._id);
        dispacth(authActions.login())
        history('/todo')
      });
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column">
            <div className="d-flex flex-column p-5 w-100">
              <input
                className="p-2 my-3 input-signup"
                name="email"
                onChange={change}
                value={Inputs.email}
                type="email"
                placeholder="Enter the mail"
              />
              <input
                className="p-2 my-3 input-signup"
                name="password"
                onChange={change}
                value={Inputs.password}
                type="password"
                placeholder="Enter the password"
              />
              <button onClick={submit} className="btn-signup">
                SignIn
              </button>
            </div>
          </div>
          <HeadingComp first="Sign" second="In" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
