'use strict'
const express = require('express');
const Viaje = require('../models/Viaje')
const Opinion = require('../models/Opiniones')
const router = express.Router();
const fecha = new Date();
const fechaActual = fecha.getFullYear()



router.get('/', async (req, res, next) => {
  const listaProxViajes = await Viaje.find().limit(2);
  const opiniones = await Opinion.find().limit(3);
  try{
    res.render('index', {
      pagina: 'Proximos viajes',
      listaProxViajes,
      opiniones,
      fechaActual
    })
  }catch(error){
    next(error)
  }
  });

router.get('/nosotros', (req, res, next) => {
  res.render('nosotros', {
    pagina: 'Sobre Nosotros',
    fechaActual,
    
  });
});

router.get('/viajes', async(req, res, next) => {
  try{
    const listaProxViajes = await Viaje.find()
    res.render('viajes', {
      pagina: 'Proximos viajes',
      listaProxViajes, 
      fechaActual
    })
  }catch(error){
    next(error)
  }
});

router.get('/viajes/:id', async(req, res, next) => {
  try{
    const id = req.params.id;
    const viaje = await Viaje.findById(id)
    res.render('detail', 
    viaje)
    }
  catch(error){
    next(error)
  }
});

router.get('/opiniones', async(req, res, next) => {
  const opiniones = await Opinion.find();
  try{
    res.render('opiniones', {
      opiniones,
      pagina: 'Opiniones de usuarios',
      fechaActual
    })
  }catch(error){
    next(error)
  }
});

router.post('/opiniones', async (req, res, next) => {
  const { nombre, mail, mensaje } = req.body;
  let errores;
    try{

    if(!nombre || !mail || !mensaje){
      errores = "Por favor, complete todos los campos"
    }
    if(errores){
      const opiniones = await Opinion.find();

      res.render('opiniones', {
        opiniones,
        pagina: 'Opiniones de usuarios',
        fechaActual,
        errores,
        nombre,
        mail,
        mensaje,
      })
    }
    else{
    const opinion = await Opinion.create({
      nombre, 
      mail, 
      mensaje
    })
    res.redirect('/opiniones')

  }
  }catch(error){
    next(error)
  }
})

module.exports = router;
