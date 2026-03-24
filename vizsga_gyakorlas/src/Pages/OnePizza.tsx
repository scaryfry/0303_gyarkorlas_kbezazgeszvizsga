import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import apiClient, { baseURL } from "../api/apiClient";
import { Button, Col, Container, Row } from "react-bootstrap";

const OnePizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pizza, setPizza] = useState<Pizza>();

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => setPizza(response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, [id]);

  const deletePizza = () => {
    apiClient
      .delete(`/pizzak/${id}`)
      .then(() => {
        toast.success("Sikeres törlés!");
        navigate("/"); // kezdőlapra irányítás
      })
      .catch(() => toast.error("Sikertelen törlés!"));
  };

  const editPizza = () => {
    navigate(`/edit-pizza/${id}`);
  };

  return (
    <Container>
      {pizza ? (
        <Row>
          <Col sm={8}>
            <h1>{pizza.nev}</h1>
            <h2>{pizza.leiras}</h2>

            <Button variant="warning" onClick={editPizza}>
              Szerkesztés
            </Button>
            <Button variant="danger" onClick={deletePizza}>
              Törlés
            </Button>
          </Col>
          <Col sm={4}>
            <img width={200} src={`${baseURL}/kepek/${pizza.imageUrl}`} />
          </Col>
        </Row>
      ) : (
        <>A pizza nem található!</>
      )}
    </Container>
  );
};

export default OnePizza;