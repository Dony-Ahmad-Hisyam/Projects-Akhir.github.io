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
      <div className="Action4">
        <div className="column">
          <img style={{ width: "100%", height: "15rem" }} src={Whole} alt="" />
        </div>
        <div className="column">
          <img style={{ width: "100%", height: "15rem" }} src={Aum} alt="" />
        </div>
        <div className="column">
          <img style={{ width: "100%", height: "15rem" }} src={Kkn} alt="" />
        </div>
        <div className="column">
          <img style={{ width: "100%", height: "15rem" }} src={Perempuan} alt="" />
        </div>
        <div className="column">
          <img style={{ width: "100%", height: "15rem" }} src={Silenced} alt="" />
        </div>
        <div className="column">
          <img style={{ width: "100%", height: "15rem" }} src={Century} alt="" />
        </div>
        <div className="column">
          <img style={{ width: "100%", height: "15rem" }} src={Wakanda} alt="" />
        </div>
      </div>
    </>
  );
};
export default Drama;
