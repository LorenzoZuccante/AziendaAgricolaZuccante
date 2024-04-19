import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
  const navigate = useNavigate();

  
  const handleNavigate = () => {
    navigate('/contatti'); 
  }

  return (
    <Container fluid className="home px-0">
      <Row>
        <Col md={12} className="text-center m-0 p-0">
          <div className="backgroundHolder"><h1>L'ORTAGGIO<br/> DAL CUORE TENERO</h1></div>
          <div className="contentDiv1 mt-5">
            <h2>Agricola Zuccante Marco</h2>
            <p>
            L'Azienda Agricola Zuccante Marco, radicata nel fertile terreno del Lazio, rappresenta l'espressione di una passione per l'agricoltura che si tramanda dal 1936. Da una storica tradizione cerealicola, quest'azienda familiare ha attraversato cinque generazioni, ognuna delle quali ha contribuito con dedizione e impegno nella ricerca incessante della qualità. La svolta arriva nel 1989, quando l'azienda decide di specializzarsi nel settore orticolo, scegliendo di dedicarsi alla coltivazione di prodotti ortofrutticoli. La trasformazione non è solo un cambio di produzione, ma la manifestazione di un'evoluzione verso tecniche sostenibili e attente al benessere della terra che le ha viste nascere. Attraverso un secolo di storia, la nostra azienda è un esempio di come la tradizione e l'innovazione possano coesistere, guidate da un impegno costante verso l'eccellenza e il rispetto per la natura.
            </p>
            <Button onClick={handleNavigate} className="customButton">Contattaci</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
