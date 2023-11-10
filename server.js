const express = require('express') // requer o express
//const Employee = require('./dbFiles/Employee')
const dbOperation = require('./dbFiles/dbOperation') // requer a dbOperation
const cors = require('cors') // requer o cors



const API_PORT = process.env.port || 5000; // API_PORT recebe o numero da porta do enviroment OU 5000
const app = express(); // app recebe o funcionamento do express

//tem que usar 
app.use(express.json())
app.use(express.urlencoded())
app.use(cors());



//quando um método POST para /api for chamado, isso acontecerá 
app.post('/api', async (req, res) => {
    console.log('Called');

})

app.post('/quit', async (req, res) => {
    await dbOperation.createEmployee(req.body)
    const result = await dbOperation.getEmployees(req.body.Firstname);

    console.log('Called quit');
    res.send(result.recordset)
})



/* let Pam = new Employee(105602, 'Pam', 'DFG', 29, 'Female');
let Pamr = new Employee(1, 'Parrr4rrm', 'DFG', 29, 'Female');
let Mark = new Employee(1002, 'Mark', 'Mark', 29, 'Male'); */


app.listen(API_PORT, () => console.log(`Listening to ${API_PORT}`)) // faz o app (que usa o express) escurtar a porta da API_PORT (5000)

