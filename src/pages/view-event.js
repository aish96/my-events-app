import { useLocation } from "react-router-dom";
import "./css/view-event.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { MdDateRange } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import {IconContext} from "react-icons";
import React, { useState } from "react";

function ViewEvent() {
  let { state } = useLocation();

console.log(state)
  return (
    <Container className="event">
      <Image src={state.eventPhoto} className="landing-img" />
      <h1>Birthday bash</h1>
      <p>
        Hosted by <strong className="host-name">{state.hostName}</strong>
      </p>

      <div className="widget">
        <div className="icon">
        <IconContext.Provider value={{size: 30}}>
        <MdDateRange/>
        </IconContext.Provider>
        </div>
        <div>
          {state.fromDate} to {state.toDate}
        </div>
      </div>
      <div className="widget">
        <div className="icon">
      <IconContext.Provider value={{ size: 30}}>
          <TiLocationOutline/>
          </IconContext.Provider>
        </div>
        <div>{state.location}</div>
      </div>
    </Container>
  );
}

export default ViewEvent;
