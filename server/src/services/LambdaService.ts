import dotenv from 'dotenv';
import axios from 'axios';


dotenv.config();

export class LambdaService {
    async invokeLambda (content : string ) : Promise<any> {
        const lambdaURL : string = process.env.AWS_LAMBDA_URL || '';
        try{
            const body = {
                content : content
            }
            const response = await axios.post(lambdaURL,body);
            console.log(response.data);

            return response.data.body.message;
        }catch(err){
            // console.error(err);
        }

        return null;
       
    }

}