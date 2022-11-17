import { Card } from "react-bootstrap";

import Aum from "../asset/img/aum.jpg";
import Whole from "../asset/img/whole.jpg";
import Kkn from "../asset/img/kkn.jpg";
import Perempuan from "../asset/img/perempuan.jpg";
import Silenced from "../asset/img/silenced.jpg";
import Century from "../asset/img/centurygirl.jpeg";
import Wakanda from "../asset/img/wakanda.jpg";

const Drama = () => {
  return (
    <>
      <div className="Action">
        <Card style={{ width: "12rem  " }}>
          <Card.Img style={{ height: "15rem" }} src={Aum} />
        </Card>

        <Card style={{ width: "12rem  " }}>
          <Card.Img style={{ height: "15rem" }} src={Whole} />
        </Card>
        <Card style={{ width: "12rem  " }}>
          <Card.Img style={{ height: "15rem" }} src={Silenced} />
        </Card>
        <Card style={{ width: "12rem  " }}>
          <Card.Img style={{ height: "15rem" }} src={Kkn} />
        </Card>
      </div>
      <div className="Action2">
        <Card style={{ width: "12rem  " }}>
          <Card.Img style={{ height: "15rem" }} src={Perempuan} />
        </Card>
        <Card style={{ width: "12rem  " }}>
          <Card.Img style={{ height: "15rem" }} src={Century} />
        </Card>
        <Card style={{ width: "12rem  " }}>
          <Card.Img style={{ height: "15rem" }} src={Wakanda} />
        </Card>
      </div>
    </>
  );
};
export default Drama;
