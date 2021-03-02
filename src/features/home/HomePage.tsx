import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container, Segment, Header, Icon, Button } from 'semantic-ui-react';

interface routerInterface {
    history: RouteComponentProps["history"];
}

export default function HomePage({history}: routerInterface): JSX.Element {

    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted >
                    <Icon name="world" size="large" color="orange" style={{marginBottom: 12}} />
                    Events-Maker
                </Header>
                <Button onClick={() => history.push('/events')} size='huge' inverted>
                    Get Started
                    <Icon name="arrow right" inverted />
                </Button>
            </Container>
        </Segment>
    )
};