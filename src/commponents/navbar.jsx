import { Navbar, Container, Nav, Button, Offcanvas, Accordion, Card } from "react-bootstrap";
import "../App";
import video from "../asset/bg/bg1.mp4";


const Navigasi = ({ name, ...props }) => {


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
                <Nav.Link className="P" href="#contact">
                Contact
                </Nav.Link>
              
              </div>
            </Container>
          </Navbar>
        </div>
      </div>
      <div>
        <div className="Welcome ">SELAMAT DATANG DI VIDISCOP</div>
        <div className="Nonton">NONTON FILM GRATIS!</div>
      </div>
    </>
  );
};

export default Navigasi;
