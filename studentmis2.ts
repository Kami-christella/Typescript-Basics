interface StudentOperations2 {
    addStudent(name: string, rollNumber: number, grade: number): void;
    displayStudents(): string;
    calculateAverageGrade(): number;
    getMenu(): string;
}

class StudentManager implements StudentOperations2 {
      //public students: StudentOperations2[] = [];

    name: string[] = [];
    rollNumber: number[] = [];
    grade: number[] = [];

    addStudent(name: string, rollNumber: number, grade: number): void {
        //  if(this.isStudentExist(rollNumber)){
        //     console.log(`Student with roll number ${rollNumber} already exists.`);
        //     return;
        // }
        this.name.push(name);
        this.rollNumber.push(rollNumber);
        this.grade.push(grade);
       // console.log(`Student added: ${name}, Roll Number: ${rollNumber}, Grade: ${grade}`);
    }
    //  isStudentExist(rollNumber: number):boolean{
    //      return this.students.find((st:StudentOperations2): boolean =>st.rollNumber === rollNumber)? true: false
    // }

    displayStudents(): string {
        if (this.name.length === 0) return "No students available.\n";
        let studentList = '';
        for (let i = 0; i < this.name.length; i++) {
            studentList += `Name: ${this.name[i]}, Roll Number: ${this.rollNumber[i]}, Grade: ${this.grade[i]}\n`;
        }
        return studentList;
    }

    calculateAverageGrade(): number {
        if (this.grade.length === 0) return 0;
        let total = 0;
        for (let i = 0; i < this.grade.length; i++) {
            total += this.grade[i];
        }
        return total / this.grade.length;
    }
 getMenus: string []=['1. Add a new student','2.Display all students','3.Calculate Average Grade','4.Exit']
    getMenu(): string {
        return `1. Add a new student
2. Display all students
3. Calculate Average Grade
4. Exit`;
    }
}


const studentManager = new StudentManager();

let n=0;
while(n<4){
    console.log(studentManager.getMenus[n]);
    n++;
}

studentManager.addStudent('Iradukunda', 1, 90);
studentManager.addStudent('Aline', 2, 85);
studentManager.addStudent('Placide', 3, 95);
console.log(studentManager.displayStudents())
//const averageGrade = studentManager.calculateAverageGrade();
//console.log(`Average Grade: ${averageGrade}`);
