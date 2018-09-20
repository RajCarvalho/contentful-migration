const talkback = require('talkback');

const opts = {
  port: 3333,
  path: './recordings',
  ignoreHeaders: [
    'x-contentful-user-agent', 'authorization', 'user-agent', 'content-length', 'accept-encoding', 'connection'
  ]
};
const server = talkback(opts);
server.start(() => console.log(`Talkback Started.`));
