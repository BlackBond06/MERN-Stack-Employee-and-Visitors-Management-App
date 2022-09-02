// const sayHi = (name) => {
//   console.log(`hello there ${name}`);
// };

// module.exports = sayHi;

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("here is what we are about!");
  }
  res.end(`<h1>Oops!</h1>
        <p> page do not exist. pls retype. </p>
        <a href="/" > back to homepage</a>
`);
});

server.listen(5000);
