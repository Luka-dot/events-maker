import React, { useState } from 'react';
import { Button, Form, Header, Segment } from "semantic-ui-react";

interface eventFormProps {
    setFormOpen: Function;
    setEvents: Function;
}

export default function EventForm({setFormOpen, setEvents}: eventFormProps) {
    const initialValues = {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    };
    
    const [values, setValues] = useState(initialValues);
   

    function handleFormSubmit() {
        console.log(values)
    };

    function functionHandleInputChange(e: React.FormEvent<HTMLInputElement>) {
        let newTarget = e.target as HTMLFormElement;
        const {name, value} = newTarget;
        setValues({...values, [name]: value});
    }

    return (
        <Segment clearing>
            <Header content='Create new Event' />
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
                <Button type='submitt' color='red' content='Cancel' onClick={() => setFormOpen(false)} />
            </Form>
        </Segment>
    )
};