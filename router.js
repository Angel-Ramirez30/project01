const express = require('express');
const router = express.Router();

const conexion = require("./database/db")

router.get('/',  (req, res)=>{
     
    conexion.query('SELECT * FROM users', (error, results)=>{
        if (error){
            throw error;
        }else{
            res.render('index', {results:results})
        }
    })
});


//RUTA PARA CREAR REGISTROS
router.get("/create", (req, res)=>{
    res.render("create")
})

//RUTA PARA EDITAR REGISTROS
router.get("/edit/:nombre", (req, res)=>{
        const id = req.params.nombre
       conexion.query("SELECT *  FROM users WHERE id =?", {id},(error, results)=>{
           if (error) {
               throw error;
           } else {
               res.render('edit', { user:results[0] })
           }
       })

});

const crud = require("./controllers/crud")
router.post("/save", crud.save)

module.exports = router;