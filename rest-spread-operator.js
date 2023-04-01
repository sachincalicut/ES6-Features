//ES6 

// Rest and Spread Operator 

//Example Rest Operator

function addNumb(a, b, c,...other){
    console.log(other);
    return a+b+c;
}
const res=addNumb(2, 4, 6, 8, 9, 10);
console.log(res);

//Example Spread Operative
 
var names= ["Rahul", "Rohith"];
function getNames(name1, name2){
    console.log(name1,name2);
}
getNames(names[0], names[1]);
getNames(...names); // spread operator
getNames(names)

// Object using rest 
var students = {
    name: "Rahul",
    age: "22",
    hobies: "Playing Cricket"
}
//const age=students.age;
const {age, ...rest}= students; // Array destructuring
console.log(age);

// spread
var newStudents={
    ...students,
    age:"29"
}
console.log(newStudents);