const mysql = require('mysql')

const conexion = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'clientes'
})


conexion.connect((error)=>{
      if(error){
        console.error('el error de conexion es: '+error)
        return
      }
      console.log('!Conectado a la BD MySQL')
})

module.exports = conexion;