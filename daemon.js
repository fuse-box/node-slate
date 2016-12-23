module.exports = {
    script: './hook.js',
    name: 'github_hook',
    port: 8993,
    logs: __dirname + "./logs/",
    attempts: 10,
    env: {
        NODE_ENV: "production",
        PORT: 8993,
        MONGO_DATABASE: 'petvetbook_app1'
    }
}