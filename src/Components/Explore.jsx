import React, { useState, useEffect, useRef } from "react";
import upArrow from "./svg/upArrow.svg";
import downArrow from "./svg/downArrow.svg";
import rightArrow from "./svg/rightArrow.svg";

const Explore = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const exploreRef = useRef(null);

  const toggleArrow = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle clicks outside of the explore div
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={exploreRef}>
      <button
        className="exp"
        onClick={toggleArrow}
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/glyph-neue/64/adventures.png"
          alt="adventures"
          className="navigator"
          style={{
            filter:
              "invert(20%) sepia(100%) saturate(5000%) hue-rotate(220deg) brightness(90%) contrast(100%)",
          }}
        />
        <p>EXPLORE</p>
        <img
          src={isExpanded ? upArrow : downArrow}
          alt={isExpanded ? "Collapse" : "Expand"}
          width="20"
          height="20"
          style={{ color: "rgb(13, 18, 32)" }}
        />
      </button>

      {isExpanded && (
        <div
          style={{
            position: "absolute",
            top: "100px",
            right: "200px",
            boxShadow: "0px 2px 8px rgba(0, 0.2, 0.2, 0.6)",
            zIndex: 1000,
            width: "1100px",
            border: "none",
            outline: "none",
          }}
        >
          <div className="expanded">
            <div className="left">
              <div className="upper">
                <p>FEATURED SPORTS</p>
                <div className="upper-div">
                  <div className="pic">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1110900/k$0e911808f2874693c066a0e0362292ae/defaut.jpg?format=auto&f=969x0"
                        alt=""
                        height={100}
                      />
                      <p>Cycling</p>
                    </a>
                  </div>
                  <div className="pic">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1116622/k$ab76cc15b0e4ef446c1ad14b5995461c/defaut.jpg?format=auto&f=969x0"
                        alt=""
                        height={100}
                      />
                      <p>Yoga</p>
                    </a>
                  </div>
                  <div className="pic">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1116623/k$22257593d9116267464d06855c391a26/defaut.jpg?format=auto&f=969x0"
                        alt=""
                        height={100}
                      />
                      <p>Tennis</p>
                    </a>
                  </div>
                  <div className="pic">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1117324/k$d50455c9edeabad2df635c817a065fb6/defaut.jpg?format=auto&f=969x0"
                        alt=""
                        height={100}
                      />
                      <p>Running</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="dipper">
                <p>MORE SPORTS</p>
                <div className="dipper-div">
                  <div className="pics">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1119922/k$073af6bada0c2036f2daeaffa68f22d5/defaut.jpg?format=auto&f=969x0"
                        alt="Badminton"
                      />
                      <p>Badminton</p>
                    </a>
                  </div>
                  <div className="pics">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1119930/k$a611ddd1b5487330d6c7cdc6585c775d/defaut.jpg?format=auto&f=969x0"
                        alt="Skating"
                      />
                      <p>Skating</p>
                    </a>
                  </div>
                  <div className="pics">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1119925/k$dc88cc6132dca95677d23aef653a00c4/defaut.jpg?format=auto&f=969x0"
                        alt="Cricket"
                      />
                      <p>Cricket</p>
                    </a>
                  </div>
                  <div className="pics">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1119923/k$5e8c254a67961acd7a5db5f61b2ef369/defaut.jpg?format=auto&f=969x0"
                        alt="Basketball"
                      />
                      <p>Basketball</p>
                    </a>
                  </div>
                  <div className="pics">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1119926/k$04a5b72038718f588f6a6175e35bfa23/defaut.jpg?format=auto&f=969x0"
                        alt="Dance"
                      />
                      <p>Dance</p>
                    </a>
                  </div>
                  <div className="pics">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1119927/k$17bf62b2889d8f6637456025e2ef5a38/defaut.jpg?format=auto&f=969x0"
                        alt="Fitness Cardio"
                      />
                      <p>Fitness Cardio</p>
                    </a>
                  </div>
                  <div className="pics">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1119937/k$5b3a458b65425d3fb9ab3df5c9ba3109/defaut.jpg?format=auto&f=969x0"
                        alt="Football"
                      />
                      <p>Football</p>
                    </a>
                  </div>
                  <div className="pics">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1119928/k$8966e8bf60a15042ff64ae063603f308/defaut.jpg?format=auto&f=969x0"
                        alt="Karate"
                      />
                      <p>Karate</p>
                    </a>
                  </div>
                  <div className="pics">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1119929/k$51df2ff1228169ff24672b3275ef8faa/defaut.jpg?format=auto&f=969x0"
                        alt="Skateboarding"
                      />
                      <p>Skateboarding</p>
                    </a>
                  </div>
                  <div className="pics">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1119929/k$51df2ff1228169ff24672b3275ef8faa/defaut.jpg?format=auto&f=969x0"
                        alt="Archery"
                      />
                      <p>Archery</p>
                    </a>
                  </div>
                  <div className="pics">
                    <a href="/">
                      <img
                        src="https://contents.mediadecathlon.com/s1119921/k$9a460a9e70a96d2e1fc915e8606f0509/defaut.jpg?format=auto&f=969x0"
                        alt="Body Building"
                      />
                      <p>Body Building</p>
                    </a>
                  </div>
                  <div className="pics">
                    <a href="/">
                      <p
                        style={{
                          color: "rgb(13,23,140,0.82)",
                          fontWeight: "bold",
                        }}
                      >
                        Explore More
                      </p>
                      <img
                        src={rightArrow}
                        alt="Arrow"
                        height={10}
                        width={30}
                        style={{ paddingTop: "3px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="div">
                <p>ACTIVITY OFFERINGS</p>

                <div className="div-d">
                  <a href="/">
                    <img
                      src="https://contents.mediadecathlon.com/s1120020/k$4bbd0b93a80b91032617da2a7e936e0f/defaut.jpg?format=auto&f=969x0"
                      alt="Events"
                    />
                    <p>Events</p>
                  </a>
                </div>
                <div className="div-d">
                  <a href="/">
                    <img
                      src=" https://contents.mediadecathlon.com/s1120019/k$004e32b0812d7d18168ec03734c8942f/defaut.jpg?format=auto&f=969x0"
                      alt="Coaching"
                    />
                    <p>Coaching</p>
                  </a>
                </div>
                <div className="div-d">
                  <a href="/">
                    <img
                      src="https://contents.mediadecathlon.com/s1120021/k$a8aa058358601b3e7eb68b504b23464a/defaut.jpg?format=auto&f=969x0"
                      alt="Playgrounds"
                    />
                    <p>Playgrounds</p>
                  </a>
                </div>
                <div className="div-d">
                  <a href="/">
                    <img
                      src="https://contents.mediadecathlon.com/s1120018/k$10734352a673043895f4c8189bf4246b/defaut.jpg?format=auto&f=969x0"
                      alt="Challenges "
                    />
                    <p>Challenges</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
