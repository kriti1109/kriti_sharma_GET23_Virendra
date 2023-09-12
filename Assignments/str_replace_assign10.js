//Assignment
let msg= "Java Is open source language and Javascript is scripting language. java Is very user-friendly and easy to use";
let q1= msg.replace('Java','Python');
console.log(q1);
const pattern2= /java/g;
let q2=msg.replace(pattern2,'python');
console.log(q2);
let q3=msg.replaceAll('Java','Hello');
console.log(q3);
const pattern4= /is/gi;
let q4=msg.replace(pattern4,'are');
console.log(q4);