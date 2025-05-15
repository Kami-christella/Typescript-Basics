// interface Student{
//     names: string;
//     age:number;
//     rollNumber: number;
// }

// class StudentOperations{
//     public students: Student[] = [];
//     constructor(){

//     }
//     addStudent2(student: Student): void {
//        // Check if student doesn't exist by rollNumber

//        if(this.isStudentExist(student.rollNumber)){
//             console.log(`Student with roll number ${student.rollNumber} already exists.`);
//             return;
//         }
//         this.students.push(student);
//         console.log('Student registered')
//     }
//     removeStudent(rollNumber: number): void{
//        //Check if student exis
//        if(this.isStudentExist(rollNumber)){
//          this.students = this.students.filter((t:Student)=>t.rollNumber!=rollNumber);
//          console.log('Student removed!')
//        } else{
//         console.log('Student not found')
//        }

//     }
//     isStudentExist(rollNumber: number):boolean{
//          return this.students.find((st:Student): boolean =>st.rollNumber === rollNumber)? true: false
//     }
// }

// const educationStudents:StudentOperations = new StudentOperations();
// let  st1: Student ={names: 'Benit', age:28, rollNumber:123};
// let st2: Student = {names:'Mugisha', age:29, rollNumber:234};
// let st3: Student = {names:'Yves', age:35, rollNumber:234};

// educationStudents.addStudent2(st1);
// educationStudents.addStudent2(st2);
// //educationStudents.addStudent(st3);
// //Remove students
// educationStudents.removeStudent(0);

// const country: string = 'Rwanda';
// switch(country){
//     case 'Rwanda':{}
//         console.log('This is Rwanda')
//         break;
//     case 'Uganda':
//         console.log('This is Uganda')
//         break;
//     default:
//         console.log('This is not Rwanda or Uganda')
//         break;
// }

const country: string = 'Rwanda';
switch(country){ 
    case 'Rwanda':{
      console.log('This is Rwanda')
      break;
    }
    case 'Uganda':{
        console.log('This is Uganda') 
        break;
    } 
    default:{
      console.log('This is not Rwanda or Uganda')
       break;
    }
}