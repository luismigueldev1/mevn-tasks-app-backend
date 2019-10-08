// importar el modelo nota
import Notas from '../models/notas';

export const newNote = async (req, res) => {
  const body = req.body;
  try {
    const notaDB = await Notas.create(body);
    res.json(notaDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error: error.message
    })
  }
}

export const getNote = async (req, res) => {
  const _id = req.params.id
  try {
    const notaDB = await Notas.findOne({ _id })
    res.json(notaDB)
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error: error.message
    })
  }
}


export const getNotes = async (req, res) => {
  try {
    const notaDB = await Notas.find()
    res.json(notaDB)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error: error.message
    })
  }
}
export const updateNote = async (req, res) => {
  const _id = req.params.id
  const body = req.body
  try {
    const notaDB = await Notas.findByIdAndUpdate(_id, body, { new: true })
    res.json(notaDB)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error: error.message
    })
  }
}

export const deleteNote = async (req, res) => {
  const _id = req.params.id
  try {
    const notaDB = await Notas.findByIdAndDelete({ _id })
    res.json(notaDB)

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error: error.message
    })
  }
}
