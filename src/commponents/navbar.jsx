import { Navbar, Container, Nav, Button, Offcanvas, Accordion, Card } from "react-bootstrap";
import "../App";
import video from "../asset/bg/bg1.mp4";
import Hisyam from "../asset/profile/aku.jpg";
import Alif from "../asset/profile/bapakku.jpg";
import React, { useState } from "react";

const Navigasi = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="BgVideo ">
        <video src={video} autoPlay loop muted />
      </div>
      <div className="Abso">
        <div className="Navbar-Border">
          <Navbar className="AS">
            <Container>
              <Navbar.Brand href="/">
                <div className="Navbar1">Vidiscop</div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <div className="Navbar2">
                <Nav.Link className="P" href="#trending">
                  Trending
                </Nav.Link>
                <Nav.Link className="P" href="#genre">
                  Genres
                </Nav.Link>
                <Button onClick={handleShow} className="Off">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  <div className="Font">About</div>
                </Button>
                <Offcanvas show={show} onHide={handleClose} {...props}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Tugas Design Website</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className="Our">Our Profile</div>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Dony Ahmad Hisyam</Accordion.Header>
                        <Accordion.Body>
                          <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={Hisyam} />
                            <Card.Body>
                              <Card.Title>DONY AHMAD HISYAM</Card.Title>
                              <Card.Text> D3 PENS PSDKU SUMENEP TEKNIK INFORMATIKA</Card.Text>
                              <Button href="https://www.instagram.com/donyhisyam21/" variant="primary">
                                Instagram
                              </Button>
                            </Card.Body>
                          </Card>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Afif Versa Putra</Accordion.Header>
                        <Accordion.Body>
                          <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                              <Card.Title>Loro</Card.Title>
                              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                          </Card>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Alif Aditya Ramadhani</Accordion.Header>
                        <Accordion.Body>
                          <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={Alif} />
                            <Card.Body>
                            <Card.Title>Alif Aditya Ramadhani</Card.Title>
                              <Card.Text> D3 PENS PSDKU SUMENEP TEKNIK INFORMATIKA</Card.Text>
                              
                              <Button href="https://www.instagram.com/alif_dhn/" variant="primary">
                                Instagram
                              </Button>
                            </Card.Body>
                          </Card>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </Container>
          </Navbar>
        </div>
      </div>
      <div>
        <div className="Welcome">SELAMAT DATANG DI VIDISCOP</div>
        <div className="Nonton">NONTON FILM GRATIS!</div>
      </div>
    </>
  );
};

export default Navigasi;
