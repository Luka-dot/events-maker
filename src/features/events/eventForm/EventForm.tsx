import React, { useState } from 'react';
import { Button, Header, Segment, FormField } from "semantic-ui-react";
import cuid from 'cuid';
import { Link, match, RouteComponentProps  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, updateEvent } from '../../../app/store/action-creators/events';
import { Formik, Form, Field } from 'formik';

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

interface eventFormProps  {
    match: any;
    history: any;
    id: any;
}

export default function EventForm({match, history}: RouteComponentProps<eventFormProps>): JSX.Element {
    const dispatch = useDispatch();
    const selectedEvent = useSelector((state: any) => state.event.events.find((e: eventData) => e.id === match.params.id));

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
        selectedEvent ? dispatch(updateEvent({...selectedEvent, ...values})) 
        : dispatch(createEvent({
            ...values, 
            id: cuid(), 
            hostedBy: 'ToBeReplaced', 
            attendees: [], 
            hostPhotoURL: 'https://randomuser.me/api/portraits/men/7.jpg' }));
        history.push('/events');
    };

    function functionHandleInputChange(e: React.FormEvent<HTMLInputElement>) {
        let newTarget = e.target as HTMLFormElement;
        const {name, value} = newTarget;
        setValues({...values, [name]: value});
    }

    return (
        <Segment clearing>
            <Header content={ !selectedEvent ? 'Create new Event' : 'Edit the Event'} />
            <Formik
                initialValues={initialValues}
                onSubmit={values => console.log(values)}
            >
                <Form className="ui form" >
                <FormField>
                    <Field name='title' placeholder='Title' />
                </FormField>
                <FormField>
                    <Field name='category' placeholder='Category' />
                </FormField>
                <FormField>
                    <Field name='description' placeholder='Description' />
                </FormField>
                <FormField>
                    <Field name='city' placeholder='City' />
                </FormField>
                <FormField>
                    <Field name='venue' placeholder='Venue' />
                </FormField>
                <FormField>
                    <Field name='date' placeholder='Date' type='date' />
                </FormField>
                
                <Button type='submitt' floated='right' positive content='Submit' />
                <Button type='submitt' color='red' content='Cancel' as={Link} to='/events' />
            </Form>
                
            </Formik>
            
        </Segment>
    )
};