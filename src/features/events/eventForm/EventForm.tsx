import React, { useState } from 'react';
import { Button, Form, Header, Segment } from "semantic-ui-react";
import cuid from 'cuid';
import { Link } from 'react-router-dom';

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

interface eventFormProps {
    setFormOpen: Function;
    setEvents: Function;
    createEvent: Function;
    selectedEvent?: eventData | any;
    updateEvent: Function;
}

export default function EventForm({setFormOpen, setEvents, createEvent, selectedEvent, updateEvent}: eventFormProps): JSX.Element {
    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    };
    
    const [values, setValues] = useState(initialValues);
   
    function handleFormSubmit() {
        selectedEvent ? updateEvent({...selectedEvent, ...values}) 
        : createEvent({
            ...values, 
            id: cuid(), 
            hostedBy: 'ToBeReplaced', 
            attendees: [], 
            hostPhotoURL: 'https://randomuser.me/api/portraits/men/7.jpg' });
        setFormOpen(false);
    };

    function functionHandleInputChange(e: React.FormEvent<HTMLInputElement>) {
        let newTarget = e.target as HTMLFormElement;
        const {name, value} = newTarget;
        setValues({...values, [name]: value});
    }

    return (
        <Segment clearing>
            <Header content={ !selectedEvent ? 'Create new Event' : 'Edit the Event'} />
            <Form onSubmit={handleFormSubmit} >
                <Form.Field>
                    <input type='text' placeholder='Event title' onChange={(e) => functionHandleInputChange(e)} name='title' value={values.title} />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Category' onChange={(e) => functionHandleInputChange(e)} name='category' value={values.category} />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Description' onChange={(e) => functionHandleInputChange(e)} name='description' value={values.description} />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='City' onChange={(e) => functionHandleInputChange(e)} name='city' value={values.city} />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Venue' onChange={(e) => functionHandleInputChange(e)} name='venue' value={values.venue} />
                </Form.Field>
                <Form.Field>
                    <input type='date' placeholder='Date' onChange={(e) => functionHandleInputChange(e)} name='date' value={values.date} />
                </Form.Field>
                <Button type='submitt' floated='right' positive content='Submit' />
                <Button type='submitt' color='red' content='Cancel' as={Link} to='/events' />
            </Form>
        </Segment>
    )
};