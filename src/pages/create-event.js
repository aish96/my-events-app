import "./css/create-event.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function CreateEvent() {
  const [fromDate, setFromDate] = useState("");

  const [toDate, setToDate] = useState("");
  let navigate = useNavigate();

  const assignFromDate = (e) => {
    setFromDate(e.target.value);
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    navigate("/event");
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
            <Form.Control type="text" name="eventName" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="hostName">
          <FloatingLabel
            controlId="hostNameFloatingInput"
            label="Host Name"
            className="mb-3"
          >
            <Form.Control type="text" name="hostName" />
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
              placeholder="Start Date"
              onChange={assignFromDate}
            />{" "}
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
              placeholder="End Date"
              onChange={(e) => setToDate(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Event Photo</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button type="submit" className="next">
          Next
        </Button>
      </Form>
    </Container>
  );
}

export default CreateEvent;
