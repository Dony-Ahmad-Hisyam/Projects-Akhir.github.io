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
      <div>
        <div className="Genres">Genres</div>
        <img id="genre" className="BgR" src="https://go.overwolf.com/wp-content/uploads/2020/06/Dota-plus-bg.jpg" alt="" />
      </div>
      <div className="ContentGenre ">
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
    </div>
  );
}

export default Kumpulan;
