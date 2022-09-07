import {IUser} from '@typesCustom';
import { FirebaseError, signInAdmin } from '../services/firebase'
import {Request, Response} from 'express';

class AuthController {

    public async signInAdmin(request: Request, response: Response){
        const credential = request.body;

        try{

            const result = await signInAdmin(credential.email, credential.password);

            const user: IUser = {
                uid: result.user.uid,
                name: result.user.displayName || '',
                email: result.user.email || credential.email
            }

            const accessToken = await result.user.getIdToken();

            return response.json({user, token: accessToken})
            
        } catch (e) {
            const error = e as FirebaseError;

            // requisição não veio como o desejado
            if (error.code == 'auth/missing-email'){
                return response.status(400).json({message: 'É preciso informar um e-mail.'})
            }

            if (error.code == 'auth/user-not-found'){
                return response.status(401).json({message: 'Usuário não encontrado.'})
            }

            if (error.code == 'auth/wrong-password'){
                return response.status(401).json({message: 'A senha está incorreta.'})
            }

            return response.status(500).json(error.message)

        }
    }

}

// Diferença entre export e export default (ambos exportam mas o defaut não permite que se altere o nome do que está sendo exportado)
export default new AuthController();