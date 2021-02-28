import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';

interface signinProps {
    signOut: Function;
};

export default function SigninMenu({signOut}: signinProps) {

    return (
        <Menu.Item position='right'>
            <Image avatar spaced='right' src='https://randomuser.me/api/portraits/men/3.jpg' />
            <Dropdown pointing='top left' text='Bob' >
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus' />
                    <Dropdown.Item text='My Profile' icon='user' />
                    <Dropdown.Item text='Sign Out' icon='power' onClick={() => signOut()} />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
};
