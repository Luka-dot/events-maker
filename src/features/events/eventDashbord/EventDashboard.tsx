import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';

interface eventDashboardProps {
    setFormOpen: Function;
    formOpen: Boolean;
    selectEvent: Function;
    selectedEvent?: eventData;
}

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

function EventDashboard(props: eventDashboardProps) {
    const [events, setEvents] = useState(sampleData);

    function handleCreateEvent(event: eventData) {
        setEvents([...events, event])
    };
    console.log(props.selectEvent)

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} selectEvent={props.selectEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
                {props.formOpen && 
                <EventForm
                    key={props.selectEvent ? props.selectedEvent?.id : null}
                    setFormOpen={props.setFormOpen} 
                    setEvents={setEvents} 
                    createEvent={handleCreateEvent} 
                    selectedEvent={props.selectedEvent} />
                }
            </Grid.Column>
        </Grid>
    )
};

export default EventDashboard
