import http from 'http';

async function delay () {
   setTimeout(() => {
  console.log('i am here ')
}, 3000);
return
}

 delay();

const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({message:"hello from BABEL without webPack"}));
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

export default server;
