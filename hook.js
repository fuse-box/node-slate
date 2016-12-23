var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/webhook', secret: 'myhashsecret' })


const exec = require('child_process').exec;


http.createServer(function(req, res) {
    handler(req, res, function(err) {
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(3098)

handler.on('error', function(err) {
    console.error('Error:', err.message)
})

handler.on('push', function(event) {

    exec('sh /home/nc/apps/node-slate/update.sh', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref)
});

handler.on('issues', function(event) {
    console.log('Received an issue event for %s action=%s: #%d %s',
        event.payload.repository.name,
        event.payload.action,
        event.payload.issue.number,
        event.payload.issue.title)
})