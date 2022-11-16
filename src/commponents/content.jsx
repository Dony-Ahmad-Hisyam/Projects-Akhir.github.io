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
                <Card style={{ width: "100%" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Aum} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Aum!</Card.Title>
                      <Card.Text>genre : Drama,Comedy,Action</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Watch</Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
              <div>
                <Card style={{ width: "100%" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Black} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Black adam</Card.Title>
                      <Card.Text>Genre : Superhero,Fantasy,Action</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Watch</Button>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
              <div>
                <Card style={{ width: "100%" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={BlackP} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Black phanter</Card.Title>
                      <Card.Text>Genre : Superhero,Fantasy,Action</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Watch</Button>
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
                <Card style={{ width: "100%" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Whole} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">The whole truth</Card.Title>
                      <Card.Text>Genre : Horror,Thriller,Drama</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Watch</Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
              <div>
                <Card style={{ width: "100%" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Century} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">20th Century Girl</Card.Title>
                      <Card.Text>Genre : Drama,Romance</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Watch</Button>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
              <div>
                <Card style={{ width: "100%" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Crawl} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Crawl</Card.Title>
                      <Card.Text>Genre : Horror,Paranormal</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Watch</Button>
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
                <Card style={{ width: "100%" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Dora} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Dora</Card.Title>
                      <Card.Text>Genre : Fantasy,Action</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Watch</Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
              <div>
                <Card style={{ width: "100%" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Kkn} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">KKN Di Desa Penari</Card.Title>
                      <Card.Text>Genre : Horror,Paranormal,drama</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Watch</Button>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
              <div>
                <Card style={{ width: "100%" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Perempuan} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Perempuan Bergaun Merah</Card.Title>
                      <Card.Text>Genre : Horror,Paranormal,Drama</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Watch</Button>
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
                <Card style={{ width: "100%" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Raya} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Raya The Last Dragon</Card.Title>
                      <Card.Text>Genre : Action,Comedy,Fantasy</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Watch</Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
              <div>
                <Card style={{ width: "100%" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={One} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">One Piece Red</Card.Title>
                      <Card.Text>Genre : Anime,Action,Comedy</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Watch</Button>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
              <div>
                <Card style={{ width: "100%" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Silenced} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Silenced</Card.Title>
                      <Card.Text>Genre ; Drama,Thriller,Action</Card.Text>
                      <div className="Card-Tittle">
                        <Button variant="primary">Watch</Button>
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
