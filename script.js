const person = ["Mike, john"];
console.log(person.length);
person[2] = "Laurence";
person[3] = "Svekis";
person[10] = "Course";
console.log(person);
console.log(person[0]);
console.log(person[3]);
console.log(person.length);

const people = new Array("test","maki","linda");
console.log(people);
const people1 = ["test","Mike","linda",100,false,null,{},["one","two"]];
console.log(people1);

document.getElementById('message').innerHTML = '${person[2]} ${person[3]}';