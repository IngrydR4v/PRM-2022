import {ICredential} from '@typesCustom';
import { FirebaseError, signInAdmin } from '../services/firebase'
import e, {Request, Response} from 'express';

class AuthController {

    public async signInAdmin(request: Request, response: Response){
        const credential = request.body;

        try{

            const result = await signInAdmin(credential.email, credential.password);
            response.json(result)
            
        } catch (e) {

            response.status(500).json(e)

        }
    }

}

// Diferença entre export e export default (ambos exportam mas o defaut não permite que se altere o nome do que está sendo exportado)
export default new AuthController();