import React from 'react';
import { Segment, Item } from 'semantic-ui-react';

import userImage from '../../../assests/user.png'

interface attendeeData {
    id: string;
    name: string;
    photoURL: string;
};

interface AttendeeProps {
    attendees: attendeeData[]
};

export default function EventDetailedSidebar({attendees}: AttendeeProps): JSX.Element {

    return (
        <>
        <Segment
            textAlign="center"
            style={{border: 'none'}}
            attached="top"
            secondary
            inverted
            color="teal"
        >
            {attendees.length} {attendees.length >1 ? 'People' : 'Person'} Going
        </Segment>
        <Segment attached>
            <Item.Group relaxed divided>
                {attendees.map((attendee: any) => (
                    <Item key={attendee.id} style={{position: 'relative'}}>
                    <Item.Image size="tiny" src={attendee.photoURL || userImage}/>
                    <Item.Content verticalAlign="middle">
                        <Item.Header as="h3">
                            <span>{attendee.name}</span>
                        </Item.Header>
                    </Item.Content>
                </Item>
                ))}  
            </Item.Group>
        </Segment>
        </>
    )
};