import { Module } from '@nestjs/common';
import { RedisService } from './application/services/redis.service';
import { RedisGateway } from './gateway/redis.gateway';
import {ChatController} from "./controller/chat.controller";
import {ChatListenerService} from "./application/services/redis.chatlistner.service";

@Module({
    controllers: [ChatController],
    providers: [RedisService, RedisGateway, ChatListenerService],
    exports: [RedisService],
})
export class RedisModule {}
