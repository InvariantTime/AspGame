import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";


export class RoomSessionConnection {

    private connection: HubConnection;

    constructor() {
        this.connection = new HubConnectionBuilder()
                    .withUrl("/hubs/roomSessions")
                    .withAutomaticReconnect()
                    .configureLogging(LogLevel.Information)
                    .build();
        
        
    }

    

}