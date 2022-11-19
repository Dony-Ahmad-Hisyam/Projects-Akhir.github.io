import { Carousel, Card, Button } from "react-bootstrap";
import "../App";
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
      <div className="Content">
        <div id="trending" className="Trending">
          Trending
        </div>
        <Carousel>
          <Carousel.Item>
            <div className="Content1">
              <div className="Polan">
                <Card style={{ width: "15rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Aum} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Aum!</Card.Title>
                      <Card.Text>genre : Drama,Comedy,Action</Card.Text>
                      <div className="Card-Tittle">
                        <Button href="https://lk21official.art/7-aum-arivu-2011/" variant="primary">
                          Watch
                        </Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
              <div className="Polan">
                <Card style={{ width: "15rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Black} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Black adam</Card.Title>
                      <Card.Text>Genre : Superhero,Fantasy,Action</Card.Text>
                      <div className="Card-Tittle">
                        <Button href="https://88.210.3.94/movie/black-adam-2022/" variant="primary">
                          Watch
                        </Button>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>
              <div className="Polan">
                <Card style={{ width: "15rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={BlackP} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Black phanter</Card.Title>
                      <Card.Text>Genre : Superhero,Fantasy,Action</Card.Text>
                      <div className="Card-Tittle">
                        <Button href="https://88.210.3.94/movie/black-panther-wakanda-forever-2022/" variant="primary">
                          Watch
                        </Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Content1">
              {" "}
              <div className="Polan">
                <Card style={{ width: "15rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Whole} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">The whole truth</Card.Title>
                      <Card.Text>Genre : Horror,Thriller,Drama</Card.Text>
                      <div className="Card-Tittle">
                        <Button href="https://lk21official.art/the-whole-truth-2021/" variant="primary">
                          Watch
                        </Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>{" "}
              </div>{" "}
              <div className="Polan">
                <Card style={{ width: "15rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Century} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">20th Century Girl</Card.Title>
                      <Card.Text>Genre : Drama,Romance</Card.Text>
                      <div className="Card-Tittle">
                        <Button href="https://lk21official.art/20th-century-girl-2022/" variant="primary">
                          Watch
                        </Button>
                      </div>
                    </Card.Body>
                  </div>
                </Card>{" "}
              </div>{" "}
              <div className="Polan">
                <Card style={{ width: "15rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Crawl} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Crawl</Card.Title>
                      <Card.Text>Genre : Horror,Paranormal</Card.Text>
                      <div className="Card-Tittle">
                        <Button href="https://lk21official.art/crawl-2019/" variant="primary">
                          Watch
                        </Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Content1">
              {" "}
              <div className="Polan">
                <Card style={{ width: "15rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Dora} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Dora</Card.Title>
                      <Card.Text>Genre : Fantasy,Action</Card.Text>
                      <div className="Card-Tittle">
                        <Button href="https://lk21official.art/dora-and-the-lost-city-of-gold-2019/" variant="primary">
                          Watch
                        </Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
              <div className="Polan">
                <Card style={{ width: "15rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Kkn} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">KKN Di Desa Penari</Card.Title>
                      <Card.Text>Genre : Horror,Paranormal,drama</Card.Text>
                      <div className="Card-Tittle">
                        <Button href="https://www.hotstar.com/id/movies/kkn-di-desa-penari/1260109693/watch" variant="primary">
                          Watch
                        </Button>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </div>{" "}
              <div className="Polan">
                <Card style={{ width: "15rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Perempuan} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Perempuan Bergaun Merah</Card.Title>
                      <Card.Text>Genre : Horror,Paranormal,Drama</Card.Text>
                      <div className="Card-Tittle">
                        <Button href="https://www.youtube.com/watch?v=itBhrVe4kaY" variant="primary">
                          Watch
                        </Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="Content1">
              {" "}
              <div className="Polan">
                <Card style={{ width: "15rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Raya} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Raya The Last Dragon</Card.Title>
                      <Card.Text>Genre : Action,Comedy,Fantasy</Card.Text>
                      <div className="Card-Tittle">
                        <Button href="https://lk21official.art/raya-and-the-last-dragon-2021/" variant="primary">
                          Watch
                        </Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>{" "}
              </div>{" "}
              <div className="Polan">
                <Card style={{ width: "15rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={One} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">One Piece Red</Card.Title>
                      <Card.Text>Genre : Anime,Action,Comedy</Card.Text>
                      <div className="Card-Tittle">
                        <Button href="https://lk21official.art/one-piece-film-red-2022/" variant="primary">
                          Watch
                        </Button>
                      </div>
                    </Card.Body>
                  </div>
                </Card>{" "}
              </div>{" "}
              <div className="Polan">
                <Card style={{ width: "15rem" }}>
                  <div className="Border-Card">
                    <Card.Img className="Card" variant="top" src={Silenced} />
                    <Card.Body className="Color">
                      <Card.Title className="Card-Tittle">Silenced</Card.Title>
                      <Card.Text>Genre ; Drama,Thriller,Action</Card.Text>
                      <div className="Card-Tittle">
                        <Button href="https://lk21official.art/silenced-2011/" variant="primary">
                          Watch
                        </Button>
                      </div>
                    </Card.Body>
                  </div>{" "}
                </Card>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#103551"
          fill-opacity="1"
          d="M0,160L34.3,144C68.6,128,137,96,206,106.7C274.3,117,343,171,411,181.3C480,192,549,160,617,165.3C685.7,171,754,213,823,240C891.4,267,960,277,1029,250.7C1097.1,224,1166,160,1234,138.7C1302.9,117,1371,139,1406,149.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Content;
