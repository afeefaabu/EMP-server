const jsonServer = require('json-server')
const empServer = jsonServer.create()
const midlleware = jsonServer.defaults()
const riuter = jsonServer.router("db.json")
const PORT = 3000 || process.env.PORT

empServer.use(middleware)
empServer.use(router)

empServer.listen(PORT,()=>{
    console.log(`Employee Portal Started at Port: ${PORT}`);
})