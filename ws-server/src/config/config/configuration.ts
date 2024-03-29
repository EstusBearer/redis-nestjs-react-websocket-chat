export default () => ({
    port: parseInt(process.env.PORT) || 3001,
    redis: {
        url: process.env.REDIS_URL
    }
});