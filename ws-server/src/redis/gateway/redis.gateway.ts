import {
    WebSocketGateway,
    OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketServer,
    MessageBody
} from '@nestjs/websockets';

import {Server} from 'socket.io';

@WebSocketGateway({
    transports: ['websocket', 'polling'], cors: {
        origin: ['*'],
    }
})
export class RedisGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer()
    server: Server;

    @SubscribeMessage('sendMessage')
    handleMessage(@MessageBody() data: any): void {
        console.log(data);
    }

    handleConnection(client: any, ...args: any[]): void {
        console.log('Client connected:', client.id);
    }

    handleDisconnect(client: any): void {
        console.log('Client disconnected:', client.id);
    }
}