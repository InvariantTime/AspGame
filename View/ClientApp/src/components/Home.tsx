import React from 'react';
import { RoomList } from './RoomList'
import { RoomListConnection } from '../Connections/RoomListConnection';

interface Props {
    connection: RoomListConnection
}

export const Home = (props: Props) => {

    return (
        <div>
            <RoomList connection={props.connection}/>
        </div>
    );
}