import { useState } from "react";
import { Button } from "react-bootstrap";
import type { User } from "../types/User";
import apiClient from "../api/apiClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({ username: "", password: "" });

  const submit = () => {
    apiClient
      .post("/login", user)
      .then(() => {
        localStorage.setItem("credentials", JSON.stringify(user));
        toast.success("Sikeres bejelentkezés");
        navigate("/");
      })
      .catch(() => toast.error("Sikertelen bejelentkezés!"));
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <br />
      <input
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <Button variant="primary" onClick={submit}>
        Bejelentkezés
      </Button>
    </>
  );
};

export default Login;