import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashbord/EventDashboard';
import NavBar from '../../features/events/nav/NavBar';

function App() {
  const [formOpen, setFormOpen] = useState(true);

  return (
    <>
      <NavBar setFormOpen={setFormOpen} formOpen={formOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
