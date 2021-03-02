import React from 'react';
import EventListItem from './EventListItem';

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

interface propsToPass {
    events:{ events: eventData[]};
    deleteEvent: Function;
}

export default function EventList(props: any): JSX.Element {
    console.log(props.events)
    const renderEventList = () => {
        return props.events.events.map((event: eventData) => {
            console.log(' inside renderEventList ', event)
            return <EventListItem key={event.id} singleEvent={event} deleteEvent={props.deleteEvent} />
        })
    }
    console.log(props.events)
    return (
        <>
            {renderEventList()}
        </>
    )
};
