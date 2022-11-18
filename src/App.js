import "./App.css";
import Navigasi from "../src/commponents/navbar";
import Content from "../src/commponents/content";
import Content2 from "../src/commponents/content2";
import Footer from "../src/commponents/footer";
function App() {
  return (
    <>
      <div>
        <Navigasi />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Content2 />
      </div>
      <div >
        <Footer />
      </div>
    </>
  );
}

export default App;
