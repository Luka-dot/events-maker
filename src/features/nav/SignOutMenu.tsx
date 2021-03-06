import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

interface signOutProps {
    setAuthenticated: Function;
};

export default function SignOutMenu({setAuthenticated}: signOutProps): JSX.Element {

    return (
        <Menu.Item position='right'>
            <Button basic inverted content='Login' onClick={() => setAuthenticated(true)} />
            <Button basic inverted content='Register' style={{ marginLeft: '0.5em'}} />
        </Menu.Item>
    )
};
