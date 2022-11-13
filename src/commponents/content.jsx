import { Carousel, Card, Button } from "react-bootstrap";
import "../App";
import Bg from "../asset/bg/bg3.jpg";
import Aum from "../asset/img/aum.jpg";
import Black from "../asset/img/blackadam.jpg";
import BlackP from "../asset/img/blackpanther.jpg";
import Whole from "../asset/img/whole.jpg";
import Kkn from "../asset/img/kkn.jpg";
import Perempuan from "../asset/img/perempuan.jpg";
import Dora from "../asset/img/dora.png";
import Century from "../asset/img/centurygirl.jpeg";
import Crawl from "../asset/img/crawl.jpeg";
import Raya from "../asset/img/raya.jpg";
import Silenced from "../asset/img/silenced.jpg";
import One from "../asset/img/one.jpeg";

const Content = () => {
  return (
    <>
      <img id="trending" className="UkuranBg" src={Bg} alt="" />
      <div className="Trending">Trending</div>

      <div className="Content">
        <Carousel>
          <Carousel.Item>
            <div className="Content1">
              <div>
                <Card style={{ width: "20rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Aum} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Go somewhere</Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
              <div>
                <Card style={{ width: "20rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Black} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Go somewhere</Button>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
              <div>
                <Card style={{ width: "20rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={BlackP} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Go somewhere</Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Content1">
              <div>
                <Card style={{ width: "20rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Whole} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Go somewhere</Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
              <div>
                <Card style={{ width: "20rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Century} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Go somewhere</Button>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
              <div>
                <Card style={{ width: "20rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Crawl} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Go somewhere</Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Content1">
              <div>
                <Card style={{ width: "20rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Dora} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Go somewhere</Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
              <div>
                <Card style={{ width: "20rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Kkn} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Go somewhere</Button>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
              <div>
                <Card style={{ width: "20rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Perempuan} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Go somewhere</Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Content1">
              <div>
                <Card style={{ width: "20rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Raya} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Go somewhere</Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
              <div>
                <Card style={{ width: "20rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={One} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Go somewhere</Button>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
              <div>
                <Card style={{ width: "20rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Silenced} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Go somewhere</Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Content;
