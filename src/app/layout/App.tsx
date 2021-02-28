import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashbord/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import NavBar from '../../features/events/nav/NavBar';
import HomePage from '../../features/home/HomePage';

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
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
        <NavBar setFormOpen={handleCreateFormOpen} formOpen={formOpen} />
        <Container className='main'> 
          <Route exact path='/events' component={EventDashboard} />
          <Route path='/events/:id' component={EventDetailedPage} />
          <Route path='/createEvent' component={EventForm} />
        </Container>
        </>
      )} />
    </>
  );
}

export default App;

//  <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} selectEvent={handleSelectEvent} selectedEvent={selectedEvent} />
