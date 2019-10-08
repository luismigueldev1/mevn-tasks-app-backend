import express from 'express';
const router = express.Router();

//importar controllers
import { newNote, getNote, getNotes, updateNote, deleteNote } from '../controllers/notas'

// Agregar una nota
router.post('/new', newNote)
//Consultar una nota
router.get('/note/:id', getNote)
//Consultar una nota
router.get('/notes/', getNotes)
//Actualizar una nota
router.put('/note/:id', updateNote)
//Actualizar una nota
router.delete('/note/:id', deleteNote)
// Exportamos la configuración de express app
module.exports = router;