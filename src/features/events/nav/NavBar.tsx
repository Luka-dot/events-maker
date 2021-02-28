import { NavLink } from 'react-router-dom';
import { Button, Container, Icon, Menu } from 'semantic-ui-react';

interface navBarProps {
    setFormOpen: Function;
    formOpen: Boolean;
}

export default function NavBar(props: navBarProps) {

    return(
        <Menu inverted fixed='top'>
            <Container >
                <Menu.Item as={NavLink} exact to='/' header>
                   <Icon name="world" size="large" color="orange" />
                    Events-Maker
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name="events" />
                    <Menu.Item as={NavLink} to='/createEvent' >
                        <Button positive inverted content='Create Event' />
                    </Menu.Item>
                    <Menu.Item position="right" >
                        <Button basic inverted content='Login' />
                        <Button basic inverted content='Register' style={{ marginLeft: '0.5em'}} />
                    </Menu.Item>
            </Container>
        </Menu>
    )
};  