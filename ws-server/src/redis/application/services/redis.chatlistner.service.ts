// src/chat/chat-listener.service.ts

import {Injectable, OnModuleInit} from '@nestjs/common';
import {RedisService} from './redis.service';

@Injectable()
export class ChatListenerService implements OnModuleInit {
    constructor(private readonly redisService: RedisService) {
    }

    onModuleInit() {
        this.listenToChatMessages();
    }

    private listenToChatMessages(): void {
        this.redisService.subscribe('example_channel', (channel, message) => {
            console.log(`Custom handler for ${channel}: ${message}`);
            // Тут ваша логика обработки сообщений...
        });
    }

}
