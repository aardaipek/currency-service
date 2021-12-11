
export class Currency{
    amount:number;
    price:number;
    pair:string;

    constructor(amount,price,pair){
        this.amount = amount;
        this.price = price;
        this.pair = pair;
    }
}