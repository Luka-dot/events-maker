import React from 'react';
import { Button, Header, Segment } from "semantic-ui-react";
import cuid from 'cuid';
import { Link, RouteComponentProps  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, updateEvent } from '../../../app/store/action-creators/events';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/shared/form/MyTextInputs';
import MyTextArea from '../../../app/shared/form/MyTextArea';
import MySelectInput from '../../../app/shared/form/MySelectInput';
import { categoryData } from '../../../app/api/categoryOptions';
import MyDateInput from '../../../app/shared/form/myDateInput';

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

    const validationSchema = Yup.object({
        title: Yup.string().required('You must provide a title'),
        category: Yup.string().required('You must provide a category'),
        description: Yup.string().required('You must provide a description'),
        city: Yup.string().required('You must provide a city'),
        venue: Yup.string().required('You must provide a venue'),
        date: Yup.string().required('You must provide a date'),
    });

    return (
        <Segment clearing>
            <Header sub color='teal' content='Event Deatils' />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => {
                    selectedEvent ? dispatch(updateEvent({ ...selectedEvent, ...values })) 
                    : dispatch(createEvent({
                        ...values, 
                        id: cuid(), 
                        hostedBy: 'ToBeReplaced', 
                        attendees: [], 
                        hostPhotoURL: 'https://randomuser.me/api/portraits/men/7.jpg' }));
                    history.push('/events');
                }}
            >
                {({ isSubmitting, dirty, isValid }) => (
                    <Form className="ui form" >
                    <MyTextInput name='title' placeholder='Event title' />
                    <MySelectInput name='category' placeholder='Category' options={categoryData} />
                    <MyTextArea name='description' placeholder='Description' rows={5}/>
                    <Header sub color='teal' content='Event Location' />
                    <MyTextInput name='city' placeholder='City' />
                    <MyTextInput name='venue' placeholder='Venue' />               
                    <MyDateInput 
                        name="date" 
                        placeholderText="Event Date" 
                        timeFormat="HH:mm"
                        showTimeSelect
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:m a"
                    />
                    
                    <Button 
                        loading={isSubmitting} 
                        disabled={!isValid || !dirty || isSubmitting}
                        type='submitt' floated='right' 
                        positive 
                        content='Submit' 

                    />
                    <Button 
                        type='submitt' 
                        color='red' 
                        disabled={isSubmitting}
                        content='Cancel' 
                        as={Link} to='/events' 
                    
                    />
                </Form>
                )}
                
                
            </Formik>
            
        </Segment>
    )
};