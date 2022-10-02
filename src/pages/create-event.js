import "./css/create-event.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function CreateEvent() {
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [location, setLocationName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [eventPhoto, setPhoto] = useState("");

  let navigate = useNavigate();

  const assignFromDate = (e) => {
    setFromDate(e.target.value);
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    navigate("/event", {
      state: {
        eventPhoto:eventPhoto,
        eventName:eventName,
        hostName:hostName,
        fromDate:fromDate,
        toDate:toDate,
        location:location
      },
    });
  }

  return (
    <Container className="create-event">
      <Form onSubmit={handleOnSubmit}>
        <div className="header">
          <h1 className="brand-name">Create Event</h1>
        </div>
        <Form.Group controlId="eventName">
          <FloatingLabel
            controlId="eventNameFloatingInput"
            label="Event Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="hostName">
          <FloatingLabel
            controlId="hostNameFloatingInput"
            label="Host Name"
            className="mb-3"
          >
            <Form.Control type="text" name="hostName" value={hostName}
              onChange={(e) => setHostName(e.target.value)}/>
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="location">
          <FloatingLabel
            controlId="locationFloatingInput"
            label="location"
            className="mb-3"
          >
            <Form.Control type="text" name="location" value={location}
              onChange={(e) => setLocationName(e.target.value)}/>
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="startDate">
          <FloatingLabel
            controlId="startDateFloatingInput"
            label="Start Date"
            className="mb-3"
          >
            <Form.Control
              type="date"
              name="startDate"
              value={fromDate}
              placeholder="Start Date"
              onChange={assignFromDate}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="endDate">
          <FloatingLabel
            controlId="endDateFloatingInput"
            label="End Date"
            className="mb-3"
          >
            <Form.Control
              type="date"
              name="endDate"
              min={fromDate}
              value={toDate}
              placeholder="End Date"
              onChange={(e) => setToDate(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Event Photo</Form.Label>
          <Form.Control type="file" accept="image/*"
              onChange={(e) => setPhoto( URL.createObjectURL(e.target.files[0]))}/>
        </Form.Group>
        <Button type="submit" className="next" >
          Next
        </Button>
      </Form>
    </Container>
  );
}

export default CreateEvent;
