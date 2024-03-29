import { Controller, Post, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { RedisService } from '../application/services/redis.service';

@Controller('chat')
export class ChatController {
    constructor(private readonly redisService: RedisService) {}

    @Post('send/:channel')
    @HttpCode(HttpStatus.OK)
    async sendMessage(@Param('channel') channel: string, @Body('message') message: string): Promise<{ success: boolean }> {
        await this.redisService.publish(channel, message);
        return { success: true };
    }
}
