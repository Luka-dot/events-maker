import React from 'react';
import { List, Image } from 'semantic-ui-react';

interface attendeeProps {
    attendeDetails: attendeeData
}

interface attendeeData {
    id: string;
    name: string;
    photoURL: string;
}

export default function EventListAtendee(props: attendeeProps) {
    const {...attendee}: attendeeData = props.attendeDetails;

    return (
        <List.Item>
            <Image size='mini' circular src={attendee.photoURL} />
        </List.Item>
    )
};