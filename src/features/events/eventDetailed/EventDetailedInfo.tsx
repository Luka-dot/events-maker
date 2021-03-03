import React from 'react';
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';

interface attendeeData {
    id: string;
    name: string;
    photoURL: string;
};

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
};

interface EventDetailedProp {
    singleEvent: eventData;
};

export default function EventDetailedInfo({singleEvent}: EventDetailedProp): JSX.Element {

    return (
        <Segment.Group>
            <Segment attached="top">
                <Grid>
                    <Grid.Column width={1}>
                        <Icon size="large" color="teal" name="info"/>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <p>{singleEvent.description}</p>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="calendar" size="large" color="teal"/>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <span>{singleEvent.date}</span>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                    <Grid.Column width={1}>
                        <Icon name="marker" size="large" color="teal"/>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <span>{singleEvent.venue}</span>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button color="teal" size="tiny" content="Show Map"/>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Segment.Group>
    )
};