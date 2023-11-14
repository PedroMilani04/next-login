const config = require('./dbConfig') // requer as coonfigurações do banco p/ login
const sql = require('mssql') // requer o mssql

const getEmployees = async(email, password) => { // função getEmployees recebe "firstname" como parâmetro
    try {
        let pool = await sql.connect(config); // se conecta com o banco usando as informações de config
        let employees = await pool.request().query(`SELECT ID FROM Users WHERE email = '${email}' AND password = '${password}'`) // faz uma request de query usando o parametro e armazena em "employees"
        if (employees.recordset.length > 0) {
            // Log "Logged!" if at least one ID is returned
            return 1;
          } else {
            // Log "Access Denied" if no IDs are returned
            return 0;
          }
          

    }
    catch(error) {
        console.log(error); // erro, caso aconteça
    }
}
const   createEmployee = async(email, password) => {
    try {
        let pool = await sql.connect(config);
        let employees = await pool.request().query(`INSERT INTO Users VALUES ('${email}', '${password}')`)
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