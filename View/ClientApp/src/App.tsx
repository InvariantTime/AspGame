import React, { useEffect } from 'react';
import { CreateRoutes } from './AppRoutes';
import './custom.css';
import { CreateRoomListConnection } from './Connections/RoomListConnection';
import { RegisterForm } from './components/RegisterForm';
import { RoomList } from './components/RoomList';
import { RoomPresenter } from './components/RoomPresenter';

const roomListConnection = CreateRoomListConnection();

const App = () => {

    useEffect(() => {
        roomListConnection.Connect();

        return () => {
            roomListConnection.Disconnect();
        }

    }, [roomListConnection]);

    const routes = CreateRoutes({
        roomListConnection: roomListConnection
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <RegisterForm/>
        </div>
    );
}

export default App;