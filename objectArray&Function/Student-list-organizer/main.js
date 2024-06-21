//TAsk 4
;
var Student = {
    students: []
};
var students = [
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
];
console.log(students);
function SeniorStudentsWithAssignments(students) {
    return students.filter(function (student) { return student.seniorStudent && student.completedAssignment; });
}
;
var seniorStudentAssignments = SeniorStudentsWithAssignments(students);
console.log(seniorStudentAssignments);
function updateClassList(students) {
    return students.filter(function (student) { return student.seniorStudent || student.completedAssignment; });
}
;
var updatelist = updateClassList(students);
console.log(updatelist);
