function chowdurify(name){
    const fullName=name+' '+"Chodury";
    return fullName;
}
const robinChow=chowdurify("Tandra");
// console.log(robinChow); 


function firstElementDouble(array){
    console.log("Got the parameter value",array)
    const firstElement=array[0];
    const double=firstElement*2;
    return double;
}
const numbers=[45,5,3,4,6,4,3];
const doubled=firstElementDouble(numbers);
console.log("Double of the first element",doubled)

const student={
    name:"Monir Abdul",
    id:15,
    marks:75
}
function isStudentPlus(student){
    console.log("Got the student ",student)
    const marks=student.marks;

}
