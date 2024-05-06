import React, { useState, useEffect } from 'react';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

const url = "/api/rooms";
const hubUrl = 'https://localhost:44458/roomlist';

export const RoomList = () => {

    const [rooms, setRooms] = useState<Room[]>();

    const getPosts = async () => {

        const options =
        {
            method: "GET"
        }

        const result = await fetch(url, options);

        if (result.ok == true) {
            const roomJson = await result.json();
            setRooms(roomJson);
            return roomJson;
        }

        return [];
    }

    useEffect(() => {
        getPosts();
    }, []);

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
                <button>+</button>
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


type Room = {
    name: string;
    adminName: string;
    userCount: number;
};