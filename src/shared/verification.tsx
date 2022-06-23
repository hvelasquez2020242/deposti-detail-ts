import { userData } from './userData';
import { Usuario } from '../interfaces/user'

export const verification = (usuario: Usuario) =>{
    let response = undefined
    userData.forEach(usuarioEncontrado =>{
        if(usuario.noCuenta === usuarioEncontrado.noCuenta){
        response = usuarioEncontrado 
        return }
    })
    return response
}