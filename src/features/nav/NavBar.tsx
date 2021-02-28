import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Icon, Menu } from 'semantic-ui-react';
import SigninMenu from './SigninMenu';
import SignOutMenu from './SignOutMenu';

interface navBarProps {
    setFormOpen: Function; 
    formOpen: Boolean;
}

export default function NavBar(props: navBarProps) {
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);

    function handleSignOut() {
        setAuthenticated(false);
        history.push('/');
    }

    return(
        <Menu inverted fixed='top'>
            <Container >
                <Menu.Item as={NavLink} exact to='/' header>
                   <Icon name="world" size="large" color="orange" />
                    Events-Maker
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name="events" />
                {authenticated && 
                    <Menu.Item as={NavLink} to='/createEvent' >
                        <Button positive inverted content='Create Event' />
                    </Menu.Item> }
                    {authenticated ? <SigninMenu signOut={handleSignOut}/> : <SignOutMenu setAuthenticated={setAuthenticated} /> }
            </Container>
        </Menu>
    )
};  