"use strict";

const os = require('os');
const http = require('http');
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;

let argv = require("minimist")(process.argv.slice(2), {
    "alias": {
        "silent": "s",
        "port": "p",
        "hostname": "h",
        "dir": "d"
    },
    "string": ["port", "hostname"],
    "boolean": "silent",
    "default": {
        "port": 9527,
        "dir": process.cwd()
    }
});

if (argv.help) {
    console.log("Usage:");
    console.log("  ss --help // print help information");
    console.log("  ss // 9527 as default port, current folder as root");
    console.log("  ss 8888 // 8888 as port");
    console.log("  ss -p 8989 // 8989 as port");
    console.log("  ss -s // don't open browser");
    console.log("  ss -h localhost // localhost as hostname");
    console.log("  ss -d /home // /home as root");
    process.exit(0);
}

let openURL = url => {
    switch (process.platform) {
        case 'darwin':
            exec('open ' + url);
            break;
        case 'win32':
            exec('start ' + url);
            break;
        default:
            spawn('xdg-open', [url]);
    }
};

let getIPAddress = () => {
    let ifaces = os.networkInterfaces();
    let ip = '';
    for (let dev in ifaces) {
      ifaces[dev].forEach(details => {
        if (ip === '' && details.family === 'IPv4' && !details.internal) {
          ip = details.address;
          return;
        }
      });
    }
    return ip || '127.0.0.1';
};

let port = argv._[0] || argv.port;
let hostname = argv.hostname || getIPAddress();

let server = http.createServer((req, res) => {
    res.end('test argv');
});

server.listen(port, () => {
    port = (port != '80' ? ':' + port : '');
    var url = "http://" + hostname + port + '/';
    console.log("Running at " + url);
    if (!argv.silent) {
      openURL(url);
    }
});
