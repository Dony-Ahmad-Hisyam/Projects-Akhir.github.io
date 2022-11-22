import { Navbar, Button, Form, Nav } from "react-bootstrap";
import "../App";
import video from "../asset/bg/bg1.mp4";

const Navigasi = () => {
  return (
    <>
      <div className="BgVideo ">
        <video src={video} autoPlay loop muted />
      </div>
      <div className="Abso">
        <div className="Navbar-Border">
          <Navbar className="AS">
            <Navbar.Brand href="/">
              <div className="Navbar1">Vidiscop</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div className="Navbar2 me-3">
              <Nav.Link href="#trending">Trending</Nav.Link>
              <Nav.Link href="#genre">Genres</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>{" "}
            </div>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>{" "}
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
