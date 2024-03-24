const http= require ('http');
const server=http.createServer((req,res) =>{
  res.end("Noice");
});
server.listen(5001, () =>
{
  console.log("Server is Working");
})