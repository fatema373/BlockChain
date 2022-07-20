@nearBindgen
export class Request {
    message : string;
    sender : string;
    reciever : string;
    money : i32;

    constructor(message:string, sender:string, reciever:string, money:i32)
    {
        this.message=message;
        this.sender=sender;
        this.reciever=reciever;
        this.money=money;
    }
}