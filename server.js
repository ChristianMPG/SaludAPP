import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/index.js';
import { conectarDB, dbStatus } from './config/db.js';


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
conectarDB();


app.use(express.json());
app.use('/api/doctores', routes.doctorRoutes);
app.use('/api/citas', routes.citaRoutes);
app.use('/api/medicinas', routes.medicineRoutes);
app.use('/api/usuario-medicina', routes.userMedicineRoutes);
app.use('/api/usuarios', routes.userRoutes);


app.get('/', (req, res) => {
if (dbStatus === 'conectado') {
res.send('¡Hola! Servidor funcionando y conectado a MongoDB.');
} else {
res.status(500).send('¡Hola! Servidor funcionando, pero hay un problema de conexión con MongoDB.');
}
});


app.listen(port, () => {
console.log(`Servidor escuchando en http://localhost:${port}`);
});

