import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAtendee from './EventListAttendee';

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

interface singleEventProp {
    singleEvent: eventData;
    selectEvent: Function;
}

export default function EventListItem(props: singleEventProp) {
    const {...event}: eventData = props.singleEvent              //  const {event}: eventevent = props.singleEvent

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL} alt='user-image' /> 
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Hosted by{` ${event.hostedBy}`}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' size='large' color='purple' />{event.date}
                    <Icon name='marker' size='large' color='red' />{event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal >
                    {event.attendees.map((attendee) => <EventListAtendee key={attendee.id} attendeDetails={attendee}/>)}
                </List>
            </Segment>
            <Segment clearing>
                <span>{event.description}</span>
                <Button color='teal' floated='right' content='View' onClick={() => props.selectEvent(event)} />
            </Segment>
        </Segment.Group>
    )
};

//  () => props.selectEvent(event)