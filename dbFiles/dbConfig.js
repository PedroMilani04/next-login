const config = {
    user: 'PedroSQL',
    password: 'foo',
    server: 'DESKTOP-IK9A20P',
    database: 'SQL_LOGIN',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    },
    port: 1433
}

module.exports = config;

//infoormações que serão usadas para conectar ao banco