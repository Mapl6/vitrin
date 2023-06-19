import "./App.css";
import NavBar from "./header/NavBar";
import Slider from "./header/Slider";
import CountUp from "react-countup";

import Articles from "./Articles";
import Footer from "./Footer";
import React, { useRef, useEffect, useState } from "react";
import StickyNav from "./StickyNav";
import CountUpTabs from "./CountUpTabs";

function App() {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroller">
      {showStickyNav && <StickyNav />}
      <section id="navbar">
        <NavBar />
        <Slider />
      </section>
      <section id="imp-articles">
        <span className="section-title">مقالات پراستناد</span>
        <Articles />
      </section>
      <section id="statistics">
        <div className="countup">
          <span className="section-title">آمار و ارقام</span>
<CountUpTabs/>
          {/* <div ref={myRef}>
        <CountUp start={0} end={100} duration={6} redraw={true} startOnMount={false} preserveValue={true} decimals={0} suffix={"%"}/>
            </div> */}
        </div>
      </section>
      <section id="rec-articles">
        <span className="section-title">مقالات اخیر</span>
        <Articles />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
