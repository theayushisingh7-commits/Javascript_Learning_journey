//Dates
let myDate = new Date()
console.log(myDate.toString());//Universal time
console.log(myDate.toDateString());
// console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate)

let mycreatedate = new Date(2025,0,22,12,58)
console.log(mycreatedate.toLocaleString())
let datymd = new Date("2025-01-22")
console.log(datymd.toLocaleDateString())

//Time====================================
let mytimestamp = Date.now()
console.log(mytimestamp);//epoch time is take by 1 jun 1970 in millisecond
console.log(mycreatedate.getTime());//difeernce epocht time to given time
console.log(Math.floor(mytimestamp/1000))
//min = 1000*60
//hour = 1000*60*60
//days = 1000*60*60*24
let today = new Date()
console.log(today.getTime())
console.log(today.getMonth())
console.log(today.getDay())

newDate.toLocaleString('default',{
    weekday:"long",//Learn More Manually mange formate
})