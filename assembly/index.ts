import {Context,PersistentVector} from "near-sdk-as";
import { Request } from "./models";
import"typedarray"
import"uri"
@nearBindgen
export class Contract {
  //writeSomething
  RequestingList:PersistentVector<Request> = new PersistentVector<Request>("m");
  @mutateState()
  Request_car(message:string , toWhom:string, money:number):Request
  {
    let sender:string = Context.sender;
    let request:Request = new Request(message,sender,toWhom,money);
    let balance = 1000;
    if(money>balance)
      request.message="not a vlid request";
    else
      request.message="a valid request"
    this.RequestingList.pushBack(request);
    return request;
  }
  //listWriting
  Req_list1():PersistentVector<Request>
  {
    return this.RequestingList; //return info abot list only
  }

  Req_list():Array<Request>
  {
    let size = this.RequestingList.length;
    let requests = new Array <Request>(size);
    for (let i=0 ;i<size ; i++)
    {
        requests[i]=this.RequestingList[i];
      
    }
    return requests;
  }

}
