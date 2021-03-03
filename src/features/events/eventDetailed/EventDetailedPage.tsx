import React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from "react-router-dom";
import { Grid } from 'semantic-ui-react';

import EventDetailedChat from './EventDetailedChat';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';
import EventDetailedHeader from './EventDetailsdHeader';

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

type Props = {
    id: string;
}

export default function EventDetailedPage({match}: RouteComponentProps<Props>): JSX.Element {
    const singleEvent = useSelector((state: any) => state.event.events.find((e: eventData) => e.id === match.params.id))
//    const find = useSelector((state: any) => state.event.events);
   
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader singleEvent={singleEvent} />
                <EventDetailedInfo singleEvent={singleEvent} />
                <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar attendees={singleEvent?.attendees}/>
            </Grid.Column>
        </Grid>
    )
};