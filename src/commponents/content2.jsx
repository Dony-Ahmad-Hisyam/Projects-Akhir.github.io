import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Action from "../commponents/Action";
import Horor from "../commponents/Horor";

function Kumpulan() {
  return (
    <div>
      <div>
        <div className="Genres">Genres</div>
        <img className="BgR" id="genre" src="https://go.overwolf.com/wp-content/uploads/2020/06/Dota-plus-bg.jpg" alt="" />
      </div>
      <div className="ContentGenre ">
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex">
                <Nav.Item>
                  <Nav.Link eventKey="first">Action</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Horor</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Action />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Horor />
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
