import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Action from "../commponents/Action";
import Horor from "../commponents/Horor";
import Drama from "../commponents/Drama";

function Kumpulan() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4c4c93"
          fill-opacity="1"
          d="M0,160L34.3,144C68.6,128,137,96,206,106.7C274.3,117,343,171,411,181.3C480,192,549,160,617,165.3C685.7,171,754,213,823,240C891.4,267,960,277,1029,250.7C1097.1,224,1166,160,1234,138.7C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    
      <div className="ContentGenre ">
        {" "}
        <div id="genre" className="Genres">
          Genres
        </div>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <div className="Nav">
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Action</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Horor</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="3">Drama</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Action />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Horor />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <Drama />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill=" #4c4c93"
          fill-opacity="1"
          d="M0,160L34.3,144C68.6,128,137,96,206,106.7C274.3,117,343,171,411,181.3C480,192,549,160,617,165.3C685.7,171,754,213,823,240C891.4,267,960,277,1029,250.7C1097.1,224,1166,160,1234,138.7C1302.9,117,1371,139,1406,149.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default Kumpulan;
