export class User{
     username:string;
     password:string;
//     private email:string;
//     private active: number;
//     private sex: number;
//     private role: number;
//     public getUsername():string{
//         return this.username;
//     }
//     public getPassword():string{
//         return this.password;
//     }
}
export class Product{
    idProduct:number;
    nameProduct:string;
    price:number;
    quantity:number;
    company: company[];
    status:string;
    view:number;
    type:type[];
    cord: cord[];
    urlImage: string;
    lastUpdate:Date;

}
export class company{
    idCompany:number;
    companyName:string;
}
export class type{
    idType:number;
    nameType:string;
}
export class cord{
    idCord:number;
    nameCord:string;
}