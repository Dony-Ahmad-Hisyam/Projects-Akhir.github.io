import { Card } from "react-bootstrap";
import Kkn from "../asset/img/kkn.jpg";
import Perempuan from "../asset/img/perempuan.jpg";
import Crawl from "../asset/img/crawl.jpeg";

const Horor = () => {
  return (
    <>
      <div className="Action">
        <Card style={{ width: "15rem  " }}>
          <Card.Img style={{ height: "20rem" }} src={Kkn} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem  " }}>
          <Card.Img style={{ height: "20rem" }} src={Perempuan} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem  " }}>
          <Card.Img style={{ height: "20rem" }} src={Crawl} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Horor;
