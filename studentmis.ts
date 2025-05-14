interface StudentOperations{
    addStudent(name: string): void;
    displayStudents(): string;
    calculateAverageGrade(): number;
}

class StudentManager implements ClassStructure{

    name: string='';
    rollNumber: number=0;
    grade: number=0.0;
    setName(name: string): void {
        this.name=name;
    }

    getName(): string {
        return this.name
    }
}

// -	addStudent
// -	displayStudents
// -	calculateAverageGrade

// •	name (String)
// •	rollNumber (number)
// •	grade (double)

