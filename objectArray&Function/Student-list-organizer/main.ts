//TAsk 4

//Student List Organize
//Learning Objective: Get comfortable with data structures (objects and arrays) and basic functions in TypeScript.

//Tasks:1
//Student Data: The provided code defines an interface named Student that describes student Information like name, senior status (true/false), and whether they've completed
//their assignments (true/false).
//o Imagine this as a template for organizing student details.
//2. Student List:
//o An array named students stores information about several students using the Student template. Think of this array as your class listi
//3. Find Senior Students with Assignments (Optional):
//The code (not shown here) has a function that might find students who are senior's and have completed their assignments.
//o Can you guess why this information might be helpful?
//o Imagine you need to update your class list! The code (not shown here) might have
//4. Class List Update:a function that resoves students who haven't completed their assignments (assuming only seniors are responsible).
//o Can you think of any reasons why this might be useful (consider limitations)?/
interface studentInformation {
name: string,
seniorStudent :boolean,
completedAssignment: boolean
};

let Student ={
students: [] as studentInformation[]
};

let students:studentInformation[]= [
    {
name: "Komal",
seniorStudent: true,
completedAssignment: true
    },

    {
name: "Sona",
seniorStudent: true,
completedAssignment: false,
    },

    {
name: "Alisha",
seniorStudent: true,
completedAssignment: true
    },

    {
name: "Rabia",
seniorStudent: false,
completedAssignment: false
    },

    {
name: "Mirha",
seniorStudent: true,
completedAssignment: true
    }
]

console.log(students)

function SeniorStudentsWithAssignments(students: studentInformation[]): studentInformation[]{

return students.filter(student => student.seniorStudent && student.completedAssignment);
};

let seniorStudentAssignments = SeniorStudentsWithAssignments(students);

console.log(seniorStudentAssignments);

function updateClassList(students: studentInformation[]): studentInformation[] {

return students.filter(student => student.seniorStudent || student.completedAssignment); 
};

let updatelist = updateClassList(students);
console.log(updatelist);