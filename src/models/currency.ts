import { ExchangeType } from "../objects/enums";

export class Currency{
    amount:number;
    price:number;
    pair:string;
    exchangeType:ExchangeType;

    constructor(amount,price,pair,exchangeType){
        this.amount = amount;
        this.price = price;
        this.pair = pair;
        this.exchangeType = exchangeType;
    }
}