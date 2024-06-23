import { RoomListConnection } from "./Connections/RoomListConnection";
import { Home } from "./components/Home";
import { RoomPresenter } from "./components/RoomPresenter";
import { RegisterForm } from './components/RegisterForm';
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";

interface Props {
  roomListConnection: RoomListConnection
}

export const CreateRoutes = (props: Props) => {

    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home connection={props.roomListConnection}/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/session" element={<RoomPresenter/>}/>
        </Routes>
      </Layout>
    );
}