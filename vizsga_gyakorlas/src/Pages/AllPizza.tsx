import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import { useNavigate } from "react-router-dom";
import apiClient, { baseURL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const AllPizza = () => {
    const navigate = useNavigate();

    const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
    const [kosar, setKosar] = useState<Array<number>>(JSON.parse(localStorage.getItem("kosar") ?? "[]"))
    
    useEffect(() => {
        apiClient.get("/pizzak").then((res) => setPizzak(res.data)).catch(() => toast.error("Sikeretelen a pizzák lekérése"))
    }, [])
    useEffect(() => {
        localStorage.setItem("kosar", JSON.stringify(kosar))
    }, [kosar])

    const generateCard = (p:Pizza) => {
        return(
        <Col>
            <Card style={{width: "18rem"}}>
                <Card.Img variant="top" src={`${baseURL}/kepek/${p.imageUrl}`}></Card.Img>               
                <Card.Title>{p.nev}</Card.Title>
                <Card.Body>
                    {p.leiras}
                </Card.Body>
                <Card.Footer>
                    {p.ar}Ft
                    <br />
                <Button variant="success" onClick={() => navigate(`/${p.id}`)}>Megtekintés</Button>
                <Button variant="info" onClick={() => {setKosar([...kosar, Number(p.id)]), toast.success("Sikeresen a kosárba raktad!")}}>Kosárba</Button>
                </Card.Footer>
            </Card>
        </Col>
        )
    }
    return<>
    <Container>
        <Row>
            {pizzak.map((i) => generateCard(i))}
        </Row>
    </Container>
    </>
}

export default AllPizza;