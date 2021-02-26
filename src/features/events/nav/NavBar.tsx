import { Button, Container, Icon, Menu } from 'semantic-ui-react'

export default function NavBar() {

    return(
        <Menu inverted fixed='top'>
            <Container >
                <Menu.Item header>
                   <Icon name="world" size="large" color="orange" />
                    Events-Maker
                </Menu.Item>
                <Menu.Item name="events" />
                    <Menu.Item>
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