import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { RoomListConnection } from '../Connections/RoomListConnection';

const url = "/api/rooms";

interface Props {
    connection: RoomListConnection;
}

export const RoomList = (props: Props) => {

    const [rooms, setRooms] = useState<Room[]>();
    const [connection, setConnection] = useState<RoomListConnection>(props.connection);

    useEffect(() => {
        UpdateRoomList(setRooms);
    }, [rooms]);

    useEffect(() => {

        connection.RoomListChanged(() => {
            UpdateRoomList(setRooms);
        });

        return () => {
            
            setConnection(props.connection);
        }

    }, [props.connection]);


    return (
        <div>
            <div>
                <table className="table">
                    <tbody>
                        {rooms?.map((room, index) =>
                            <tr key={room.name}>
                                <td>{index}</td>
                                <td>{room.name + 1}</td>
                                <td>Players: {room.userCount ?? 0}/5</td>
                                <td>User Name</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div>
                <button onClick={OnAddingRoom}>+</button>
            </div>
        </div>
    )
}

const OnAddingRoom = async () => {
    var info = prompt("Write new room name:");

    if (info == null)
        return;

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name: info
        })
    };

    var result = await fetch(url, options);

    if (result.ok == false) {
        alert("unable to add room");
    }
}

const UpdateRoomList = async (setRooms: Dispatch<SetStateAction<Room[] | undefined>>) => {

    const options =
    {
        method: "GET"
    }

    const result = await fetch(url, options);

    if (result.ok == true) {
        const roomJson = await result.json();
        setRooms(roomJson);
    }
}


type Room = {
    name: string;
    adminName: string;
    userCount: number;
};