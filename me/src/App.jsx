import { useState } from "react";

import "./flipCard.css";
import girlface from "./assets/girlface.png";
import kone from "./assets/vaalikausikone.png";
import sistema from "./assets/sistema.png";

function App() {
  const [rightOn, setRightOn] = useState(false);
  const [leftOn, setLeftOn] = useState(false);

  return (
    <div className="container">
      <div className="inline">
        <img src={girlface} className="girl-img" />
      </div>
      <div className="title inline">
        <sup>
          <b>Petteri Pääkkönen</b>
          <br />
          <span>Software developer</span>
          <br />
          <span>niko.petteri.paakkonen@gmail.com</span>
        </sup>
      </div>
      <div>{/* <a href={window.location.href}>X</a> */}</div>

      {!leftOn && (
        <div
          className="flip-card-right"
          onMouseEnter={() => setRightOn(true)}
          onMouseLeave={() => setRightOn(false)}
        >
          <div className="flip-card-inner-right">
            <div className="flip-card-front-right rounded-border center-container">
              <img
                src={sistema}
                className="sistema-img"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="flip-card-back-right">
              <h1>Sistema</h1>
              <p>
                Where journalists have started to use modern technologies to
                support the story telling, the mainstream of e-literature
                doesn't really differ from the traditional forms of the written
                art.
              </p>
              <p>
                Sistema is my demonstration of the possibilities of the
                literature in the era of the modern technology. The novel or
                short story is still under a process and I have plans to develop
                the concept further. I have use a digital comic strip called{" "}
                <a
                  href="https://www.altsalt.com/listing/a-modern-ghost/1"
                  target="_blank"
                >
                  The Modern Ghost
                </a>{" "}
                as a benchmark.
              </p>
              <a
                href="http://two-windows.s3-website.eu-north-1.amazonaws.com/"
                target="_blank"
              >
                Sistema {">>"}
              </a>
            </div>
          </div>
        </div>
      )}
      {!rightOn && (
        <div
          className="flip-card-left"
          onMouseEnter={() => setLeftOn(true)}
          onMouseLeave={() => setLeftOn(false)}
        >
          <div className="flip-card-inner-left">
            <div className="flip-card-front-left rounded-border center-container">
              <img src={kone} className="kone-img" />
            </div>
            <div className="flip-card-back-left">
              <h1>Vaalikausikone</h1>
              <p>Vaalikausikone is a voting assistant application. </p>
              <p>
                Politicians often make all kind of promises before the
                elections. Still, the actual behaviour often differs with the
                promises.
              </p>
              <p>
                With Vaalikausikone citizens can compare their opinions with the
                actual votes of the parliament. Vaalikausikone contains also the
                information about the answers of the Yle's voting assistant
                application so there is a possibility to compare the
                politician's promises with their actual behaviour.
              </p>
              <a
                href="https://www.vaalikausikone.fi"
                style={{ color: "navy" }}
                target="_blank"
              >
                Vaalikausikone {">>"}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
