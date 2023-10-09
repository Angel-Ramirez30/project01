const conexion = require('../database/db');

exports.save = (req, res)=>{
   const nombre =  req.body.nombre
    const apellido = req.body.apellido
    const edad = req.body.edad
    const cedula = req.body.cedula
    const direccion = req.body.direccion
    conexion.query("INSERT INTO users SET ?", {nombre: nombre,apellido:apellido,edad:edad,cedula:cedula,direccion:direccion}, (error, results)=>{
       if(error){
        console.log(error)
       }else{
        res.redirect("/")
    }
    })


}