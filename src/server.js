//ARQUIVO ENDRY POINT DO PROJETO, FAZENDO USO DO EXPRESS 
const express = require('express');
const app = express();
const cors = require('cors');

//DEFINIÇÃO DA PORTA LOCAL PARA RODAR O SERVIDOR
const PORT = 3333;

//REQUISIÇÃO DAS ROTAS
const UsuariosRouter = require('../src/routes/UsuariosRouter');
const MedicamentosRouter = require('../src/routes/MedicamentosRouter');
const EnderecosRouter = require('../src/routes/EnderecosRouter');

//MIDDLEWARES DE CORPO DE REQUISIÇÃO
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//UTILIZANDO AS ROTAS
app.use('/', UsuariosRouter); 
app.use('/', MedicamentosRouter);
app.use('/', EnderecosRouter);

app.listen(PORT, ()=> console.log('SERVIDOR RODANDO EM http://localhost:3333'));

