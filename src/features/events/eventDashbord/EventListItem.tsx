import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import userImg from '../../../assests/user.png';
import EventListAtendee from './EventListAttendee';

export default function EventListItem() {

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={userImg} alt='user-image' /> 
                        <Item.Content>
                            <Item.Header content='Event Title' />
                            <Item.Description>
                                Hosted by Bob
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' size='large' color='purple' />
                    <Icon name='marker' size='large' color='red' />
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal >
                    <EventListAtendee />
                    <EventListAtendee />
                    <EventListAtendee />
                    <EventListAtendee />
                </List>
            </Segment>
            <Segment clearing>
                <span>Description of Event</span>
                <Button color='teal' floated='right' content='View' />
            </Segment>
        </Segment.Group>
    )
};