// let age: number =9;
// let country: string ='Rwanda';
// let coutry: any = 'Rwanda';
// coutry=0;
// let num: number = coutry as number +9;
// console.log('Hello');

// let ages: number[]=[];
// let countries: string[]=[];
// let countryRead: readonly string []=['Rwanda','Burundi'];
// countries.push('');

// console.log('Hello');
// type imibare = number;
// type inyuguti= string;
// type person ={
//     gender: string;
//     country: string;
//     names: string;
// }

// let person1:person = {
//   gender: 'Female',
//     country: 'Rwanda',
//     names:'Kami'

// }
// console.log(person1.country)

// interface personInterface{
//     gender: string,
//     country: string,
//     names: string,
// }

// let person2:personInterface = {
//     gender: 'female',
//     country: 'Rwanda',
//      names: 'Kami'
//     }


// let age: imibare= 10;
// let country: inyuguti='Rwanda';

// enum gender {
//     female='female',
//     male='male'
// }

// let gender: gender = gender.male;

// enum status {
//     ACTIVE = 'active',
//     INACTIVE = 'inactive',
// }

// function deposit (currentBalance: number, amount : number): void {
//    let balance: number = currentBalance+amount;
// // console.log(`Deposited ${amount} to ${account}`);
// }

// function depositReturn (currentBalance: number, amount : number): number {
//     return currentBalance+amount;
// }

// class Stock{
//     public stockBalance: number;
//     private difference: number;
//     constructor(balance: number){
//         this.stockBalance=balance;
//         this.difference=0;
//     }
//      stockIn(quantity: number): void {
//         this.stockBalance += quantity;
//     }
//     stockOut(quantity: number): void {
//         this.stockBalance -= quantity;
//     }
//     getDifference(): number{
//         return this.difference
//     }
// }
// let stock : Stock =new Stock(200);
// let stockTwo: Stock = new Stock (500);
// let stockThree : Stock =new Stock(1000);
// stock.stockIn(50);
// stockTwo.stockIn(50);
// stock.getDifference

// // car class

// class Car{
//     public carkilometers:number;
//     public speed: number;
  
//      constructor(kilometers: number){
//         this.carkilometers=kilometers;
//     }

//    drive(movingkilometers:number) : void{
//     this.carkilometers+=movingkilometers;
//     }
//     stop(stoppingtime: number): void{
//         this.carkilometers-=stoppingtime;
//     }   
// }
// let carobj1 : Car =new Car(200);
// carobj1.drive(100)

// class Car2{
//     public distanceInKm: number;
//     private speed: number;

//     constructor (currentDistance: number){
//         this.distanceInKm= currentDistance;
//     }

//     drive(km: number): void{
//      this.distanceInKm=km;
//     }

//     stop(): number{
//         return this.speed;
//     }
// }


class User{
    public firstName: string;
    public lastName: string;
    private age: number;

      constructor(){
        this.age=0;
        this.firstName='Null';
        this.lastName='Null'
    }

     registerUsers(firstName:string, lastName:string, age: number): void {
        this.firstName=firstName,
        this.lastName=lastName,
        this.age=age
    }

     returnFirstName(): string{
        return this.firstName
    }
     returnLastName(): string{
        return this.lastName
    }
     returnAge(): number{
        return this.age
    }
}

let user1 : User =new User();
user1.registerUsers('Kamikazi', 'Christella',45)
user1.returnFirstName;
user1.returnLastName;
user1.returnAge;

// Inheritance

class Book{
    public manufacturer: string;
    public title: string;
    constructor (man: string, tit: string) {
        this.manufacturer=man;
        this.title=tit
    }
}

class EducationBook extends Book{
    constructor(){
        super("UR","Math Book");

    }
}
const educationBook = new EducationBook();
educationBook.title;
educationBook.manufacturer;

//exercise on inheritance

class House{
   // parent class House( size,floors,district)
    public district: string;
    public size: number;
      public floors: number;
    constructor (district: string, size: number, floor: number) {
        this.district=district;
        this.size=size;
        this.floors=floor;
    }
}

class NyarugengeHouse extends House{
    constructor(){
        super("Nyarugenge",20, 2);

    }
}

class KicukiroHouse extends House{
    constructor(){
        super("Kicukiro", 10, 5)
    }
}

const nyarugengeHouse= new NyarugengeHouse
nyarugengeHouse.district
nyarugengeHouse.floors
nyarugengeHouse.size


const kicukiroHouse=new KicukiroHouse
kicukiroHouse.district
kicukiroHouse.floors
kicukiroHouse.size


