import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <Container className="nooo">
      <Row>
        <Col>
          <h1>Privacy Policy</h1>
          <p>
            La presente privacy policy intende informare gli utenti del nostro sito sulle modalità di gestione dei dati personali, in conformità al Regolamento (UE) 2016/679, noto come General Data Protection Regulation (GDPR).
          </p>
          <h2>Raccolta dei dati</h2>
          <p>
            Il nostro sito raccoglie dati personali nei seguenti modi:
            <ul>
              <li>Informazioni fornite volontariamente dall'utente</li>
              <li>Dati raccolti automaticamente durante la navigazione</li>
            </ul>
          </p>
          <h2>Utilizzo dei dati</h2>
          <p>
            I dati raccolti vengono utilizzati per:
            <ul>
              <li>Fornire il servizio richiesto dall'utente</li>
              <li>Migliorare la qualità del servizio offerto</li>
              <li>Comunicazioni di marketing, previo consenso dell'utente</li>
            </ul>
          </p>
          <h2>Diritti dell'utente</h2>
          <p>
            Ai sensi del GDPR, l'utente ha diritto a:
            <ul>
              <li>Accedere ai propri dati personali</li>
              <li>Richiedere la rettifica o la cancellazione degli stessi</li>
              <li>Limitare il trattamento dei dati che lo riguardano</li>
              <li>Opporsi al trattamento dei dati</li>
            </ul>
          </p>
          <h2>Contatti</h2>
          <p>
            Per qualsiasi domanda relativa alla presente policy o ai dati personali trattati, è possibile contattare il responsabile del trattamento all'indirizzo email: ortofrutta@aziendazuccante.org .
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
