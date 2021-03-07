import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Item, Header, Button, Image } from 'semantic-ui-react';
import { format } from 'date-fns';

import drinksImage from '../../../assests/drinks.jpg';

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
    attendees?: attendeeData[]
}

interface eventDetailHeaderProps {
    singleEvent: eventData | any
}

const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

export default function EventDetailedHeader({singleEvent}: eventDetailHeaderProps): JSX.Element {

    return (
        <Segment.Group>
    <Segment basic attached="top" style={{padding: '0'}}>
        <Image src={drinksImage} fluid style={eventImageStyle} />

        <Segment basic style={eventImageTextStyle}>
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Header
                            size="huge"
                            content={singleEvent.title}
                            style={{color: 'white'}}
                        />
                        <p>{format(singleEvent.date, 'MMMM d, yyyy h:m a')}</p>
                        <p>
                            Hosted by <strong>{singleEvent.hostedBy}</strong>
                        </p>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    </Segment>

    <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button>

        <Button color="orange" floated="right" as={Link} to={`/manage/${singleEvent.id}`}>
            Manage Event
        </Button>
        </Segment>
    </Segment.Group>
    )
};