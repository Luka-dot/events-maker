import { Button, Form, Header, Segment } from "semantic-ui-react";

interface eventFormProps {
    setFormOpen: Function;
}

export default function EventForm(props: eventFormProps) {
    return (
        <Segment clearing>
            <Header content='Create new Event' />
            <Form>
                <Form.Field>
                    <input type='text' placeholder='Event title' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Category' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Description' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='City' />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Venue' />
                </Form.Field>
                <Form.Field>
                    <input type='date' placeholder='Date' />
                </Form.Field>
                <Button type='submitt' floated='right' positive content='Submit' />
                <Button type='submitt' color='red' content='Cancel' onClick={() => props.setFormOpen(false)} />
            </Form>
        </Segment>
    )
};