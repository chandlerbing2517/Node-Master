const http= require ('http');
const server=http.createServer(() =>{
  console.log("Served");
});
server.listen(5001, () =>
{
  console.log("Server is Working");
})