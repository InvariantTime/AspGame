import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

const hubUrl = '/roomlist';

const App = () => {

    const [hub, setHub] = useState<HubConnection>();

    const connect = async () => {
        var connection = new HubConnectionBuilder()
            .withUrl(hubUrl)
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build();

        try {
            await connection.start()
                .then(() => console.log("connected to hub"));

        setHub(connection);
        }
        catch (e) {
            console.log(e);
        }
    }

    connect();

    return (
        <Layout>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                })}
            </Routes>
        </Layout>
    );
}

export default App;