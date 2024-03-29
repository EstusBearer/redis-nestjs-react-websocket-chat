import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
        methods: 'GET,POST,PUT,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type,Authorization',
    });

    const port = process.env.PORT || 3001;
    await app.listen(port);
}

bootstrap();
