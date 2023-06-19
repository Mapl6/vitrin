import { useState } from "react";
import CountUp from "react-countup";

const CountUpTabs = () => {
  const [activeButton, setActiveButton] = useState("total");

  const handleButtonClick = (button) => setActiveButton(button);

  return (
    <div className="">
      <div className="button-container">
        <button
          className={activeButton === "total" ? "active" : ""}
          onClick={() => handleButtonClick("total")}
        >
          دسته 1
        </button>
        <button
          className={activeButton === "popular" ? "active" : ""}
          onClick={() => handleButtonClick("popular")}
        >
           دسته 2
        </button>
        <button
          className={activeButton === "recent" ? "active" : ""}
          onClick={() => handleButtonClick("recent")}
        >
           دسته 3
        </button>
      </div>
      <div className="countup-main">
        {activeButton === "total" && (
          <>
            <div className="countup-container">
              <CountUp start={0} end={1763} duration={10} />
              <p>تعداد کل مقالات</p>
            </div>
            <div className="countup-container">
              <CountUp start={0} end={542} duration={10} />
              <p>مقالات پربازدید</p>
            </div>
            <div className="countup-container">
              <CountUp start={0} end={12} duration={10} />
              <p>مقالات جدید</p>
            </div>
          </>
        )}
        {activeButton === "popular" && (
          <>
            <div className="countup-container">
              <CountUp start={0} end={490} duration={5} />
              <p>تعدادمقالات پراستناد</p>
            </div>
            <div className="countup-container">
              <CountUp start={0} end={345} duration={5} />
              <p>تعدادمقالات پربازدید</p>
            </div>
            <div className="countup-container">
              <CountUp start={0} end={23} duration={5} />
              <p>مقالات جدید</p>
            </div>
          </>
        )}
        {activeButton === "recent" && (
          <>
            <div className="countup-container">
              <CountUp start={0} end={180} duration={10} />
              <p>تعداد مقالات اخیر</p>
            </div>
            <div className="countup-container">
              <CountUp start={0} end={78} duration={10} />
              <p>مقالات پربازدید</p>
            </div>
            <div className="countup-container">
              <CountUp start={0} end={9} duration={10} />
              <p>مقالات جدید</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CountUpTabs;