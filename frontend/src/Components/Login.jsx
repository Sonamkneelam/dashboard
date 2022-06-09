import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const init = {
    email: "",
    password: "",
  };

  let navigate = useNavigate();
  const [formdata, setFormData] = useState(init);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formdata);
  };

  const login = async (payload) => {
    axios
      .post("http://localhost:7000/login", payload)
      .then((res) => {
        console.log(res.data);
        //if(res.data.user.)
        sessionStorage.setItem("token", res.data.token);
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
