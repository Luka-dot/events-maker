import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';
import EventDetailedHeader from './EventDetailsdHeader';

export default function EventDetailedPage() {

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader />
                <EventDetailedInfo />
                <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar />
            </Grid.Column>
        </Grid>
    )
};