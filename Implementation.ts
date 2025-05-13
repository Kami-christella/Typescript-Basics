interface ClassStructure {
    setName(name: string): void;
    getName(): string;
}

class ExampleOne implements ClassStructure{

    name: string='';
    setName(name: string): void {
        this.name=name;
    }

    getName(): string {
        return this.name
    }
}
//- add function, numberOne, nUmberTwo
//- substract function, numberOne.numberTwo

interface addnumbers{
    setNumbers(numberOne: number, numberTwo: number):void;
    getNumbers():number
}

class addition implements addnumbers{
    numberOne:number=10;
    numberTwo: number =20;
    sum:number=0;

    setNumbers(numberOne: number, numberTwo: number): void {
        this.numberOne=numberOne;
        this.numberTwo=numberTwo;
        this.sum=this.numberOne+this.numberTwo;
        console.log(this.sum)
    }
    getNumbers(): number {
        return this.sum;
    }
}

interface subtractNumbers{
    setNumbers(numberOne:number, numberTwo: number):void
    getNumbers(): number;
}
class subtraction implements subtractNumbers{
      numberOne:number=10;
    numberTwo: number =20;
     subrac:number=0;

    setNumbers(numberOne: number, numberTwo: number): void {
        this.numberOne=numberOne
        this.numberTwo=numberTwo
        this.subrac=this.numberOne-this.numberTwo;
        console.log(this.subrac)
    }
    getNumbers(): number {
        return this.subrac;
    }


}