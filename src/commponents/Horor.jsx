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
        </Card>
        <Card style={{ width: "15rem  " }}>
          <Card.Img style={{ height: "20rem" }} src={Perempuan} />
        </Card>
        <Card style={{ width: "15rem  " }}>
          <Card.Img style={{ height: "20rem" }} src={Crawl} />
        </Card>
      </div>
    </>
  );
};
export default Horor;
