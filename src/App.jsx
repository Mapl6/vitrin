import "./App.css";
import NavBar from "./header/NavBar";
import Slider from "./header/Slider";
import CountUp from "react-countup";

import Articles from "./Articles";
import Footer from "./Footer";
import React, { useRef, useEffect, useState } from 'react';
function App() {

  const myRef = useRef(null);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = myRef.current.getBoundingClientRect().top;
      console.log(top);
      const bottom = window.innerHeight;
      console.log(bottom);
      if (top < bottom ) {
        setIsCounting(!isCounting);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isCounting]);
  return (
    <>
      <NavBar />
      <Slider />
      <span>مقالات پراستناد
      </span>
      <Articles />
      <div className="countup" >
        <div>
          <CountUp start={0} end={1205} duration={15} />
          <p>تعداد مقالات</p>
        </div>
        <div>
          <CountUp start={0} end={1675} duration={15} />
          <p>تعداد مقالات</p>
        </div>
        <div>
          <CountUp start={0} end={234} duration={10} />
          <p>تعداد مقالات</p>
        </div>
            {/* <div ref={myRef}>
      <CountUp start={0} end={100} duration={6} redraw={true} startOnMount={false} preserveValue={true} decimals={0} suffix={"%"}/>
    </div> */}
      </div>
      <span>مقالات اخیر
      </span>
      <Articles />
      <Footer />
    </>
  );
}

export default App;
