import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashbord/EventDashboard';
import NavBar from '../../features/events/nav/NavBar';

interface attendeeData {
  id: string;
  name: string;
  photoURL: string;
}

interface eventData {
  id: string; 
  title: string; 
  date: string; 
  category: string; 
  description: string; 
  city: string; 
  venue: string; 
  hostedBy: string; 
  hostPhotoURL: string; 
  attendees: attendeeData[]
}

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any | eventData>(null);

  function handleSelectEvent(event: eventData) {
    setSelectedEvent(event);
    setFormOpen(true)
  };

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} formOpen={formOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} selectEvent={handleSelectEvent} selectedEvent={selectedEvent} />
      </Container>
    </>
  );
}

export default App;
