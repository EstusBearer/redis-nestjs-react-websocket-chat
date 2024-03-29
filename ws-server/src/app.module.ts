import {Module} from '@nestjs/common';
import {RedisModule} from "./redis/redis.module";
import {ConfigModule} from '@nestjs/config';
import configuration from "./config/config/configuration";


@Module({
    imports: [ConfigModule.forRoot({
        load: [configuration],
    }), RedisModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
