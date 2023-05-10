import "./App.css";
import NavBar from "./header/NavBar";
import Slider from "./header/Slider";
import CountUp from "react-countup";

import Articles from "./Articles";
import Footer from "./Footer";

function App() {
  return (
    <>
      <NavBar />
      <Slider />
      <Articles />
      <div className="countup">
        <div>
          <CountUp start={0} end={1205} duration={10} />
          <p>تعداد مقالات</p>
        </div>
        <div>
          <CountUp start={0} end={1675} duration={10} />
          <p>تعداد مقالات</p>
        </div>
        <div>
          <CountUp start={0} end={234} duration={10} />
          <p>تعداد مقالات</p>
        </div>
      </div>
      <Articles />
      <Footer />
    </>
  );
}

export default App;
