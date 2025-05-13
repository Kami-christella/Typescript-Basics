// 
enum Status{
    ACTIVE=1,
    INACTIVE=2
}
interface Category{
    name:String;
}
interface Book{
    title:string;
    author:string;
    status:Status;
    categories:Category[];
}
enum Gender{
    Female=0,
    Male=1
}
interface Employee{
    names:string
    gender:Gender
}

class Library{
    location:string;
    name:string;
    constructor(loc:string,n:string)
    {
        this.location=loc;
        this.name=n;
    }
}

interface Library_{
    name:string;
    location:string;
}
class KigaliLibrary extends Library{
constructor(library:Library_)
{
    super(library.location,library.name)
}
getLibraryName()
{
    return this.name;
}
setLibraryLocation(name:string):void{
    this.location=name
}
}
const b:Library_={
    name:'Kacyiru Library',
    location:'Kigali'
}
const kglLibrary=new KigaliLibrary(b);
console.log(kglLibrary.name);
console.log(kglLibrary.getLibraryName());