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
        let sum=numberOne+numberTwo;
        console.log(sum)
    }
    getNumbers(): number {
        return this.sum;
    }
}

