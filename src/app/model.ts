export class User{
    username:string;
    password:string;

}
export class Register{
    username:string;
    password:string;
    email:string;
    active: number;
    sex: number;
    country: string;
    birdDay: string;
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
export class role{
    idRole:number;
    nameRole:string;
}
export class Date{
    day:string;
    month:string;
    year:string;
}