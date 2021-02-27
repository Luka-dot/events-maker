import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';

interface eventDashboardProps {
    setFormOpen: Function;
    formOpen: Boolean;
}

function EventDashboard(props: eventDashboardProps) {
    const [events, setEvents] = useState(sampleData);

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                {props.formOpen && 
                <EventForm setFormOpen={props.setFormOpen} />
                }
            </Grid.Column>
        </Grid>
    )
};

export default EventDashboard
