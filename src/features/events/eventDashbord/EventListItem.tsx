import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import { deleteEvent } from '../../../app/store/action-creators';
import EventListAtendee from './EventListAttendee';
import { format, parseISO } from 'date-fns';
import { date } from 'date-fns/locale/af';

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
interface eventDataWithNewDate {
    id: string; 
    title: string; 
    date: any; 
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
}

export default function EventListItem(props: singleEventProp): JSX.Element {
    const {...event}: eventData | eventDataWithNewDate = props.singleEvent;    
    const dispatch = useDispatch();
    
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
                    <Icon name='clock' size='large' color='purple' />{format(event.date, 'MMMM d, yyyy h:m a')}
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
                <Button color='red' floated='right' content='Delete' onClick={() => dispatch(deleteEvent(event))} />
                <Button color='teal' floated='right' content='View' as={Link} to={`/events/${event.id}`} />
            </Segment>
        </Segment.Group>
    )
};