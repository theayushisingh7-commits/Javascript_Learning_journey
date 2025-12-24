//Primitive Datatypes
/*
There are 7 types of Primitive datatypes
Its work on call by value(isme ye hota hi aki value ko copy karke dete hai aur han
change copy value me change kar rhe hote hai na ki real value me )
1.String
2.Number
3.Boolean
4.Null
5.Undefined
6.BigInt
7.Symbol 
*/
//Non Primitive Datatypes
/* 
There are 3 types and other more
Its work on call by refernce 
1.Array
2.Objects
3.Functions
Note - this is dynamic type language beacuse at the time of running data type is defined
All the non primitive datatypes   of datatype is function and function datatype is object function
*/
const bigNum = 2242342n;//this is use for bigInt
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id===anotherid)
//Both are return different valueboth are unique
//Arrays
const heroen =["Ashi","Ayushi Singh"]
//Object
let value ={
    name:"hitesh",
    age:22,
}
//Function
const myfunc = function(){
    console.log("Ayushi Singh")
}
//Stack and Heap Memory ========================================================================================
/*
Stack - Primitive datatype(copy me change hota hai)
Heap - Non Primitive datatype(refernce me chnage hota hai )
*/
//Stack Example
let one = "Ashi";
console.log(one)
let two = one;
two = "ayushi"
console.log(one);
console.log(two);

//Heap Example
let userone = {
    email:"ayushi.singh@gmail.com",
    password:124,
}
let usertwo = userone
usertwo.email = "ashiverma@gmail.com";
console.log(userone.email);
console.log(usertwo.email);

