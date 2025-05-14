// interface StudentOperations {
//     addStudent(name: string, rollNumber: number, grade: number): void;
//     displayStudents(): string;
//     calculateAverageGrade(): number;
//     getMenu(): string;
// }

// class StudentManager implements StudentOperations {

//     name: string[] = [];
//     rollNumber: number[] = [];
//     grade: number[] = [];

//     addStudent(name: string, rollNumber: number, grade: number): void {
//         this.name.push(name);
//         this.rollNumber.push(rollNumber);
//         this.grade.push(grade);
//         console.log(`Student added: ${name}, Roll Number: ${rollNumber}, Grade: ${grade}`);
//     }

//     displayStudents(): string {
//         if (this.name.length === 0) return "No students available.\n";
//         let studentList = '';
//         for (let i = 0; i < this.name.length; i++) {
//             studentList += `Name: ${this.name[i]}, Roll Number: ${this.rollNumber[i]}, Grade: ${this.grade[i]}\n`;
//         }
//         return studentList;
//     }

//     calculateAverageGrade(): number {
//         if (this.grade.length === 0) return 0;
//         let total = 0;
//         for (let i = 0; i < this.grade.length; i++) {
//             total += this.grade[i];
//         }
//         return total / this.grade.length;
//     }

//     getMenu(): string {
//         return `1. Add a new student
// 2. Display all students
// 3. Calculate Average Grade
// 4. Exit`;
//     }
// }

// // Simulate basic CLI interaction (this part only works in a browser or TS runtime that supports `prompt`)
// const studentManager = new StudentManager();

// let running = true;
// while (running) {
//     const menu = studentManager.getMenu();
//     console.log(menu);

//     const choice = prompt('Enter your choice:');

//     switch (choice) {
//         case '1':
//             const name = prompt('Enter student name:') || '';
//             const rollNumber = Number(prompt('Enter roll number:'));
//             const grade = Number(prompt('Enter grade:'));
//             if (!isNaN(rollNumber) && !isNaN(grade)) {
//                 studentManager.addStudent(name, rollNumber, grade);
//             } else {
//                 console.log('Invalid roll number or grade.');
//             }
//             break;

//         case '2':
//             console.log(studentManager.displayStudents());
//             break;

//         case '3':
//             console.log(`Average Grade: ${studentManager.calculateAverageGrade()}`);
//             break;

//         case '4':
//             console.log('Exiting...');
//             running = false;
//             break;

//         default:
//             console.log('Invalid choice. Please try again.');
//     }

  
// }
