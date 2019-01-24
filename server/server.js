const http = require('http')
const port = 3001

const requestHandler = async (request, response) => {
  console.log(request.url)
  const result = http.get("http://lerolero.miguelborges.com/paragraphs/1", (resp) => {
    let data = '';
  
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data).explanation);
    }));
    
  response.end(result)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})