export class Result<T>{
    public data: T;
    public success: boolean = true;
    public message: string = "";

    constructor(success:boolean,data:T,meesage:string){
        this.data = data;
        this.message = this.message;
        this.success = success;
    }
}

export class SuccessResult extends Result<any>{
    constructor(data:any = {status:true}){
        super(true,data,'');
    }
}

export class ErrorResult extends Result<any>{
    constructor(message:string){
        super(false,{},message);
    }
}