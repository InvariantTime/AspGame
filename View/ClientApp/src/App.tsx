import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CreateRoutes } from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { CreateRoomListConnection, RoomListConnection } from './Connections/RoomListConnection';

const roomListConnection = CreateRoomListConnection();

const App = () => {

    useEffect(() => {
        roomListConnection.Connect();

        return () =>{
            roomListConnection.Disconnect();
        }

    }, [roomListConnection]);

    const routes = CreateRoutes({
        roomListConnection: roomListConnection
    });

    return (
        <Layout>
            <Routes>
                {routes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                })}
            </Routes>
        </Layout>
    );
}

export default App;