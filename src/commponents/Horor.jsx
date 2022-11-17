import Kkn from "../asset/img/kkn.jpg";
import Perempuan from "../asset/img/perempuan.jpg";
import Crawl from "../asset/img/crawl.jpeg";

const Horor = () => {
  return (
    <>
      <div className="Action4">
        <div className="column">
          <img style={{ width: "100%", height: "15rem" }} src={Perempuan} alt="" />
        </div>
        <div className="column">
          <img style={{ width: "100%", height: "15rem" }} src={Kkn} alt="" />
        </div>
        <div className="column">
          <img style={{ width: "100%", height: "15rem" }} src={Crawl} alt="" />
        </div>
        <div className="column">
          <img style={{ width: "100%", height: "15rem" }} src={Crawl} alt="" />
        </div>
      </div>
    </>
  );
};
export default Horor;
