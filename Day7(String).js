//String Concetanation
let name = "Ayushi is best coder in the world"
let score ="32"
console.log(name+"score is "+score)
//String Manipulation
let str1 = new String("Ayushi")
console.log(str1[0]);
console.log(str1.__proto__)
console.log(str1.toUpperCase())
//ye jo hai ham object bana rhe hai toh usek bad bhi isme call by value par work kar raha hai  na ki call by refenrce par kyoki object jo hota hai vo call by refernece par work karta hai
console.log(str1.charAt(2))
console.log(str1.indexOf('i'))
let newstring = str1.substring(-7,3)
console.log(newstring)
let anotherstring = str1.slice(-3,4)
//slice 
/*
In Slice when we give a negative value dete hai toh ye lenght find karta hai aur jab lenght ko -(length) karta hai aur given start value di gyi ho usme comapere kartahia ki 
agr -length se badi hui value start slice ki toh formula use kartahai start slice - length od string aur agr chooti hui start slice ki value toh vo start slice value 0 letea hai 

 */
console.log(anotherstring)
const newsting1="  @ayushi"
console.log(newsting1.trim())
//remove whitespace frome string


const url="https://ayushi.com/ayushi%20verma"
console.log(url.replace('%20','url'))
console.log(url.includes('ayushi'))
console.log(name.split(' '))

 