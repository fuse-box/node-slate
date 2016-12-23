module.exports = {
    script: './hook.js',
    name: 'github_hook',
    port: 3098,
    logs: __dirname + "./logs/",
    attempts: 10,
}