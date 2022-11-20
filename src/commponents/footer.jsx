import Hisyam from "../asset/profile/aku.jpg";
import Alif from "../asset/profile/bapakku.jpg";
import apip from "../asset/profile/wew1.jpg";
import { Form, Button, Offcanvas, Accordion, Card } from "react-bootstrap";
import React, { useState } from "react";

function Footer({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="contact"  className="Contant">
        Contact Us
      </div>
      <Form className="Fotter">
        <div className="Fotter2">
          <Form.Group className="" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <div className="Fot">
        <section>
          <div class="container">
            <div class="row text-center text-xs-center text-sm-left text-md-left">
              <div class="col-xs-12 col-sm-4 col-md-4 mt-5 ">
                <h5>Quick links</h5>
                <ul class="list-unstyled quick-links">
                  <li>
                    <a href="https://www.fiverr.com/share/qb8D02">
                      <i class="fa fa-angle-double-right"></i>Home
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fiverr.com/share/qb8D02">
                      <i class="fa fa-angle-double-right"></i>About
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fiverr.com/share/qb8D02">
                      <i class="fa fa-angle-double-right"></i>FAQ
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fiverr.com/share/qb8D02">
                      <i class="fa fa-angle-double-right"></i>Get Started
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fiverr.com/share/qb8D02">
                      <i class="fa fa-angle-double-right"></i>Videos
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4 mt-5 ">
                <h5>Quick links</h5>
                <ul class="list-unstyled quick-links">
                  <li>
                    <a href="https://www.fiverr.com/share/qb8D02">
                      <i class="fa fa-angle-double-right"></i>Home
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fiverr.com/share/qb8D02">
                      <i class="fa fa-angle-double-right"></i>About
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fiverr.com/share/qb8D02">
                      <i class="fa fa-angle-double-right"></i>FAQ
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fiverr.com/share/qb8D02">
                      <i class="fa fa-angle-double-right"></i>Get Started
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fiverr.com/share/qb8D02">
                      <i class="fa fa-angle-double-right"></i>Videos
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4 mt-5 ">
                <h5>About Us</h5>
                <Button onClick={handleShow} className="p-1 m-1 bg-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" class="bi bi-file-person " viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
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
                          <Card style={{ width: "100%" }}>
                            <Card.Img variant="top" src={Hisyam} />
                            <Card.Body>
                              <Card.Title>DONY AHMAD HISYAM</Card.Title>
                              <Card.Text> D3 PENS PSDKU SUMENEP TEKNIK INFORMATIKA</Card.Text>
                              <div className="ButtonP">
                                <Button href="https://www.instagram.com/donyhisyam21/" variant="primary">
                                  Instagram
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Afif Versa Putra</Accordion.Header>
                        <Accordion.Body>
                          <Card style={{ width: "100%" }}>
                            <Card.Img variant="top" src={apip} />
                            <Card.Body>
                              <Card.Title>Apip</Card.Title>
                              <Card.Text>D3 PENS PSDKU SUMENEP TEKNIK INFORMATIKA</Card.Text>
                              <div className="ButtonP">
                                <Button href="https://www.instagram.com/_apeip/ " variant="primary">
                                  Instagram
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Alif Aditya Ramadhani</Accordion.Header>
                        <Accordion.Body>
                          <Card style={{ width: "100%" }}>
                            <Card.Img variant="top" src={Alif} />
                            <Card.Body>
                              <Card.Title>Alif Aditya Ramadhani</Card.Title>
                              <Card.Text> D3 PENS PSDKU SUMENEP TEKNIK INFORMATIKA</Card.Text>
                              <div className="ButtonP">
                                <Button href="https://www.instagram.com/alif_dhn/" variant="primary">
                                  Instagram
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </div>
            <div class="row"></div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p>
                  <u>
                    <a href="https://www.nationaltransaction.com/">National Transaction Corporation</a>
                  </u>{" "}
                  is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]
                </p>
                <p class="h6">
                  © All right Reversed.
                  <a class="text-green ml-2" href="/" target="_blank">
                    Sunlimetech
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Footer;
