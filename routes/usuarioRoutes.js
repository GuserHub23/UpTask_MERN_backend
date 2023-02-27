import express from 'express'

import { 
    registrar, 
    autenticar, 
    confirmar, 
    resetPassword, 
    comprobarToken,
    nuevoPassword,
    perfil,
} from '../controllers/usuarioController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = express.Router()

// AUTENTICACIÓN, REGISTRO Y CONFIRMACION DE USUARIOS

router.post('/', registrar) // Crea un nuevo usuario
router.post('/login', autenticar) // Autentica el usuario
router.get('/confirmar/:token', confirmar) // Verifica el token y lo borra
router.post('/reset-password', resetPassword) // Resetea la contraseña
router.route('/reset-password/:token').get(comprobarToken).post(nuevoPassword) // Verifica el token para recuperar la contraseña y luego la guarda
router.get('/perfil', checkAuth, perfil)


export default router