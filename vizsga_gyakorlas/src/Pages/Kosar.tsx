import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import apiClient from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { Button, Table } from "react-bootstrap";

const Kosar = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((response) => setPizzak(response.data))
      .catch(() => toast.error("A pizzák betöltése sikertelen volt"));
  }, []);

  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]"),
  );

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const removeItem = (searchedIndex: number) => {
    setKosar(kosar.filter((_, i) => i !== searchedIndex));
  };
  const priceSum = kosar.reduce((osszeg, id) => {
    const pizza = pizzak.find((p) => p.id == id)
    return osszeg + Number(pizza?.ar)
  }, 0)
return (
    <>
      <h1>Kosár tartalma</h1>
      {kosar.length > 0 ? (
        <>
          <Table striped bordered hover>
            <thead>
              <th>Név</th>
              <th>Ár</th>
              <th>Törlés</th>
            </thead>
            <tbody>
              {kosar.map((id, index) => {
                const pizza = pizzak.find((p) => p.id == id);

                return (
                  <tr>
                    <td>{pizza?.nev}</td>
                    <td>{pizza?.ar} Ft</td>
                    <td>
                      <Button
                        onClick={() => removeItem(index)}
                        variant="danger"
                      >
                        Törlés
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div>Összesen: {priceSum} Ft</div>
          <Button onClick={() => setKosar([])} variant="warning">
            Kiürítés
          </Button>
        </>
      ) : (
        <h2>A kosár tartalma üres</h2>
      )}
    </>
  );
};

export default Kosar;