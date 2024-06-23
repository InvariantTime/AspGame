import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { RoomListConnection } from '../Connections/RoomListConnection';
import { Button, Heading, IconButton, Table, TableContainer, Tbody, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

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
        <div className="w-3/4 max-h-200px p-8 shadow-lg">
            <Heading className="text-center">Комнаты</Heading>

            <Button className="m-10" onClick={OnAddingRoom} colorScheme="blue">+</Button>

            <TableContainer>
                <Table>

                    <Thead>
                        <Tr>
                            <Th>Название</Th>
                            <Th>Количество игроков</Th>
                            <Th>Владелец</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            rooms?.map((room, i) =>
                                <Tr className="hover:bg-blue-300">
                                    <Th>{room.name}</Th>
                                    <Th>0</Th>
                                    <Th>{room.adminName}</Th>
                                </Tr>)
                        }
                    </Tbody>
                </Table>

            </TableContainer>

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
    url: string;
};