import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
    private redisPublisher: RedisClientType;
    private redisSubscriber: RedisClientType;

    constructor() {
        const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
        this.redisPublisher = createClient({ url: redisUrl });
        this.redisSubscriber = createClient({ url: redisUrl });
    }

    async onModuleInit() {
        await this.redisPublisher.connect();
        await this.redisSubscriber.connect();
    }

    async onModuleDestroy() {
        await this.redisPublisher.disconnect();
        await this.redisSubscriber.disconnect();
    }

    async publish(channel: string, message: string): Promise<void> {
        await this.redisPublisher.publish(channel, message);
    }

    async subscribe(channel: string, callback: (channel: string, message: string) => void): Promise<void> {
        await this.redisSubscriber.subscribe(channel, (message) => {
            console.log(`Received message from ${channel}: ${message}`);
            callback(channel, message); // Вызываем коллбэк с каналом и сообщением
        });
    }

    async unsubscribe(channel: string): Promise<void> {
        await this.redisSubscriber.unsubscribe(channel);
    }
}
