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
var User = /** @class */ (function () {
    function User() {
        this.age = 0;
        this.firstName = 'Null';
        this.lastName = 'Null';
    }
    User.prototype.registerUsers = function (firstName, lastName, age) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.age = age;
    };
    User.prototype.returnFirstName = function () {
        return this.firstName;
    };
    User.prototype.returnLastName = function () {
        return this.lastName;
    };
    User.prototype.returnAge = function () {
        return this.age;
    };
    return User;
}());
var user1 = new User();
var user2 = new User();
var user3 = new User();
user1.registerUsers('Kamikazi', 'Christella', 45);
user1.returnFirstName;
user1.returnLastName;
user1.returnAge;
console.log(user1.returnFirstName);
