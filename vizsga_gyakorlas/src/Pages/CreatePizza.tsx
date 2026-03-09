import { useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const CreatePizza = () => {
  const navigate = useNavigate();
  const [pizza, setPizza] = useState<Pizza>({
    nev: "",
    leiras: "",
    ar: 0,
    imageUrl: "",
  });
  const submit = () => {
    apiClient
      .post("/pizzak", pizza)
      .then(() => {
        (toast.success("Sikeresen létrehoztad a pizzát"), navigate("/"));
      })
      .catch(() => toast.error("Sikeretelen létrehozás!"));
  };
  return (
    <>
      <h1>Név</h1>
      <input
        type="text"
        onChange={(e) => setPizza({ ...pizza, nev: e.target.value })}
      />
      <h1>Leírás</h1>
      <input
        type="text"
        onChange={(e) => setPizza({ ...pizza, leiras: e.target.value })}
      />
      <h1>Ár</h1>
      <input
        type="number"
        onChange={(e) => setPizza({ ...pizza, ar: Number(e.target.value) })}
      />
      <h1>Kép</h1>
      <input
        type="text"
        onChange={(e) => setPizza({ ...pizza, imageUrl: e.target.value })}
      />
      <br />
      <Button variant="success" onClick={submit}>Mentés</Button>
    </>
  );
};

export default CreatePizza;
