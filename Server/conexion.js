const express = require('express')
const app = express()
const port = 3000
const User = require('./db/User.js');
const Vinculos = require('./db/vinculos.js');
const sequelize = require('./db/db.js')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const Descripcion = require('./db/descripcion.js');


// server.name = 'API';

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

Vinculos.hasMany(Descripcion);
Descripcion.belongsTo(Vinculos);


sequelize.sync({force: true})
  .then(() => {
    console.log('Modelos sincronizados correctamente');
    
    // Puedes iniciar tu servidor de Express aquí
    app.listen(port, () => {
      console.log('Servidor en el puerto 3000');
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar los modelos:', error);
  });

  app.post('/user',async (req,res) =>{
    const {email,password} = req.body;
    await User.create({email,password})
    const vinculos = await  Vinculos.findAll();
    console.log(vinculos)
    if(vinculos.length>4){
      res.send('hola mundo');
    }
    await Vinculos.create({
      descripcion: 'All Users'
    })
    await Vinculos.create({
      descripcion: 'Verified'
    })
    await Vinculos.create({
      descripcion: 'Banned'
    })
    await Vinculos.create({
      descripcion: 'Deleted'
    })
    res.send('hola mundo')
})

app.get('/user',async(req,res)=>{
  const vinculos = await Vinculos.findAll();
  res.status(200).json(vinculos);
})

