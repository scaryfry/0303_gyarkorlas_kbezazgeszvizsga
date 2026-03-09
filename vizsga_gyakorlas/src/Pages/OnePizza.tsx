import { useEffect, useState } from "react";
import apiClient, { baseURL } from "../api/apiClient";
import { useNavigate, useParams } from "react-router-dom";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";

const OnePizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState<Pizza>();
  useEffect(() => {
    apiClient
      .get(`pizzak/${id}`)
      .then((res) => setPizza(res.data))
      .catch(() => toast.error("Sikeretelen betöltés!"));
  }, [id]);

  const deletePizza = () => {
    apiClient
      .delete(`pizzak/${id}`)
      .then(() => {
        (toast.success("Sikeres törlés"), navigate("/"));
      })
      .catch(() => toast.error("Sikertelen törlés!"));
  };
  return (
    <>
      {pizza ? (
        <>
          <h1>Név</h1>
          <h2>{pizza.nev}</h2>
          <h1>Leírás</h1>
          <h2>{pizza.leiras}</h2>
          <h1>Ár</h1>
          <h2>{pizza.ar}Ft</h2>
          <h1>Kép</h1>
          <h2>
            <img src={`${baseURL}/kepek/${pizza.imageUrl}`} width={200} alt="" />
          </h2>
          <Button variant="danger" onClick={deletePizza}>Törlés</Button>
        </>
      ) : (
        <>
          <h1>404 a pizza nem taláható!</h1>
        </>
      )}
    </>
  );
};

export default OnePizza;
