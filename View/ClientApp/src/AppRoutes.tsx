import { RoomListConnection } from "./Connections/RoomListConnection";
import { Home } from "./components/Home";

interface Props {
  roomListConnection: RoomListConnection
}

export const CreateRoutes = (props: Props) => {

    return [
      {
        index: true,
        element: <Home connection={props.roomListConnection}/>
      },
    ];
}
