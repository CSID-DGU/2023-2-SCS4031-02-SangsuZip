export class CommonResponseDTO<T> {
    data : T;
    statusCode : number;
    message : string;

    constructor(data : T, statusCode : number, message : string){
        this.data = data;
        this.statusCode = statusCode;
        this.message = message;
    }

}