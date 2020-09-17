//importando express e mongoose
const express   = require   ('express');
const cors      =require    ('cors');
const mongoose  = require   ('mongoose');
const requireDir= require   ('require-dir');

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// iniciando o Banco de dados
mongoose.connect('mongodb+srv://magrinn:magrinn@node-api.uicbq.mongodb.net/node-api?retryWrites=true&w=majority', 
    { useNewUrlParser: true}
);

requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);