import React from 'react';
import { List, Image } from 'semantic-ui-react';
import userImg from '../../../assests/user.png';

export default function EventListAtendee() {

    return (
        <List.Item>
            <Image size='mini' circular src={userImg} />
        </List.Item>
    )
};