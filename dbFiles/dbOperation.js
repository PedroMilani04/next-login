const config = require('./dbConfig') // requer as coonfigurações do banco p/ login
const sql = require('mssql') // requer o mssql

const getEmployees = async() => { // função getEmployees recebe "firstname" como parâmetro
    try {
        let pool = await sql.connect(config); // se conecta com o banco usando as informações de config
        let employees = pool.request().query(`SELECT * FROM Users WHERE ID = 1`) // faz uma request de query usando o parametro e armazena em "employees"
        console.log(employees);
        return employees; // retorna o valor de "employees"
    }
    catch(error) {
        console.log(error); // erro, caso aconteça
    }
}
const   createEmployee = async(Employee) => {
    try {
        let pool = await sql.connect(config);
        let employees = await pool.request().query(`INSERT INTO EmployeeDemographics VALUES (${Employee.EmployeeID}, '${Employee.Firstname}', '${Employee.Lastname}', ${Employee.Age}, '${Employee.Gender}' )`)
        console.log(employees);
        return employees;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getEmployees,
    createEmployee
}

//exporta as funções getEmployees e createEmployee para serem usadas