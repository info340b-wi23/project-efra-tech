import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import RevoCalendar from 'revo-calendar';
import "bootstrap/dist/css/bootstrap.css";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const Calendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);

  const handleDateClick = (date) => {
    setShowModal(true);
    setDate(date);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    event.preventDefault();

    if (description.trim() === '') {
      alert('Description is required.');
      return;
    }

    const db = getFirestore();
    const eventsRef = collection(db, "events");
    try {
      await addDoc(eventsRef, 
        {
          description: description.toString(),
          date: date.toString(),
          user: ""
        }
      
      );
      setShowModal(false);
      setDescription("");
      setDate(null);
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  };

  const events = [];
  async function fetchEvents() {
    const db = getFirestore();
    // Get a reference to the events collection
    const querySnapshot = await getDocs(collection(db, "events"));
  
    // Create an empty array to hold the parsed objects  
    // Loop through the query snapshot and parse each document to an object
    querySnapshot.forEach((doc) => {
      // Get the document data as an object
      const data = doc.data();
  
      // Add the document ID to the object as a property
      data.id = doc.id;
  
      // Push the parsed object to the events array
      events.push(data);
    });
  
    // The events array now contains all the parsed objects
    return events;
  }
  
  // Call the async function and log the result
  fetchEvents().then((events) => {
    console.log(events);
  }).catch((error) => {
    console.error(error);
  });

  return (
    <main>
      <div className="calendar">
        <
          RevoCalendar
          events={events}
          style={{
            borderRadius: "5px",
            border: "1.5px solid #4F6995",
          }}
          highlightToday={true}
          lang="en"
          primaryColor="#474C7A"
          secondaryColor="#EBEBEB"
          todayColor="#3B3966"
          textColor="#333333"
          indicatorColor="orange"
          animationSpeed={
            300
          }
          sidebarWidth={
            180
          }
          detailWidth={
            280
          }
          showDetailToggler={
            true
          }
          showSidebarToggler={
            true
          }
          onePanelAtATime={
            false
          }
          allowDeleteEvent={
            true
          }
          allowAddEvent={
            true
          }
          openDetailsOnDateSelection={
            true
          }
          timeFormat24={
            true
          }
          showAllDayLabel={
            false
          }
          detailDateFormat="DD/MM/YYYY"
          addEvent={
            (date) => {
              handleDateClick(date)
            }
          }
        />
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Enter Event Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* <div className='calendar-error-resolve'>

      {/* <div className='calendar-error-resolve'>Calendar is only visible on larger screens!</div> */}
    </main>
  );
}

export default Calendar;
