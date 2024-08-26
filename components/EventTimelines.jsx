"use client"

import { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
import EventTimelineMessageCard from "./EventTimelineMessageCard";
import {messages} from "../utils/timelineMessages"

const Timeline = ({ setObserver, callback }) => {

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);

  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  const [showMessage3, setShowMessage3] = useState(false);
  const [showMessage4, setShowMessage4] = useState(false);
  const [showMessage5, setShowMessage5] = useState(false);

  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);

  const someCallback = () => {
      setShowMessage1(true);
      console.log("happy")
  };

  const someCallback2 = () => {
    setShowMessage2(true);
    console.log("happy2")
  };

  const someCallback3 = () => {
    setShowMessage3(true);
      console.log("happy3")
  };
  const someCallback4 = () => {
    setShowMessage4(true);
      console.log("happy3")
  };

  const someCallback5 = () => {
    setShowMessage5(true);
      console.log("happy3")
  };

  useEffect(() => {
    // setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
  }, []);

  return (
    <div className="wrapper">
      {/* <div id="timeline1" ref={timeline1} className="timeline" /> */}
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          1
        </div>
        <div className="message" ><EventTimelineMessageCard show={showMessage1} message={messages[0]} position={"left"} /> </div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        <div className="message" ><EventTimelineMessageCard show={showMessage2} message={messages[1]} position={"right"} /> </div>
      </div>


      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        <div className="message" ><EventTimelineMessageCard show={showMessage3} message={messages[2]} position={"left"} /> </div>
      </div>
       
      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle">
          4
        </div>
        <div className="message"><EventTimelineMessageCard show={showMessage4} message={messages[3]} position={"right"} /> </div>
      </div>

      <div id="timeline5" ref={timeline5} className="timeline" />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className="circle">
          5
        </div>
        <div className="message"><EventTimelineMessageCard show={showMessage5} message={messages[4]} position={"left"} /> </div>
      </div>
    </div>
  );
};

export default function App() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="pb-[200px] relative overflow-hidden pt-[50px]">
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#15BFFD"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      {/* <div className="stub2">{message}</div> */}
    </div>
  );
}
