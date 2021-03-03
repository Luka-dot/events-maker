import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store/reducers';

// interface eventDashboardProps {
//     setFormOpen: Function;
//     formOpen: Boolean;
//     selectEvent: Function;
//     selectedEvent?: eventData;
//     events: eventData[];
// }

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

function EventDashboard(): JSX.Element {
    const events = useSelector((state: RootState) => state.event)

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Event Filters</h2>
            </Grid.Column>
        </Grid>
    )
};

export default EventDashboard

